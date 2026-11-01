param(
  [switch]$SkipInstall
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$nodeVersion = '24.22.1'
$toolRoot = Join-Path $root '.tools'
$nodeDirectory = Join-Path $toolRoot "node-v$nodeVersion-win-x64"
$nodeExe = Join-Path $nodeDirectory 'node.exe'
$corepackCmd = Join-Path $nodeDirectory 'corepack.cmd'

if ($env:PROCESSOR_ARCHITECTURE -ne 'AMD64') {
  throw "This bootstrap currently supports Windows x64. Detected $env:PROCESSOR_ARCHITECTURE."
}

if (-not (Test-Path -LiteralPath $nodeExe)) {
  $bundledRoot = Join-Path $env:LOCALAPPDATA 'OpenAI\Codex\runtimes\cua_node'
  $bundledNode = Get-ChildItem -LiteralPath $bundledRoot -Filter node.exe -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $candidateVersion = & $_.FullName --version 2>$null; $candidateVersion -eq "v$nodeVersion" } |
    Select-Object -First 1

  New-Item -ItemType Directory -Force -Path $nodeDirectory | Out-Null
  if ($bundledNode) {
    $bundledBin = Split-Path -Parent $bundledNode.FullName
    Copy-Item -LiteralPath $bundledNode.FullName -Destination $nodeExe
    Copy-Item -LiteralPath (Join-Path $bundledBin 'LICENSE') -Destination $nodeDirectory
    Copy-Item -LiteralPath (Join-Path $bundledBin 'node_modules\corepack') -Destination (Join-Path $nodeDirectory 'node_modules') -Recurse -Force
  } else {
    $downloads = Join-Path $toolRoot 'downloads'
    $archive = Join-Path $downloads "node-v$nodeVersion-win-x64.zip"
    $checksums = Join-Path $downloads 'SHASUMS256.txt'
    New-Item -ItemType Directory -Force -Path $downloads | Out-Null
    [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12
    $releaseUrl = "https://nodejs.org/dist/v$nodeVersion"
    Invoke-WebRequest -UseBasicParsing -Uri "$releaseUrl/node-v$nodeVersion-win-x64.zip" -OutFile $archive
    Invoke-WebRequest -UseBasicParsing -Uri "$releaseUrl/SHASUMS256.txt" -OutFile $checksums
    $checksumLine = Get-Content -LiteralPath $checksums | Where-Object {
      $_ -match "^([0-9a-fA-F]{64})\s+\*?node-v$nodeVersion-win-x64\.zip$"
    } | Select-Object -First 1
    if (-not $checksumLine) { throw 'The official Node.js checksum entry was not found.' }
    $expectedHash = [regex]::Match($checksumLine, '^[0-9a-fA-F]{64}').Value.ToLowerInvariant()
    $actualHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $archive).Hash.ToLowerInvariant()
    if ($actualHash -ne $expectedHash) { throw 'The Node.js archive did not match its official SHA-256 checksum.' }
    Expand-Archive -LiteralPath $archive -DestinationPath $toolRoot
    Remove-Item -LiteralPath $archive, $checksums -Force
  }
}

if (-not (Test-Path -LiteralPath $nodeExe)) { throw 'The project-local Node.js runtime was not installed.' }
if (-not (Test-Path -LiteralPath $corepackCmd)) {
  $corepackJs = Join-Path $nodeDirectory 'node_modules\corepack\dist\corepack.js'
  if (-not (Test-Path -LiteralPath $corepackJs)) { throw 'Corepack was not found alongside the local Node.js runtime.' }
  @(
    '@echo off',
    '"%~dp0node.exe" "%~dp0node_modules\corepack\dist\corepack.js" %*'
  ) | Set-Content -Path $corepackCmd -Encoding ascii
}

$env:PATH = "$nodeDirectory;$env:PATH"
$env:COREPACK_HOME = Join-Path $toolRoot 'corepack'
$env:TEMP = Join-Path $toolRoot 'tmp'
$env:TMP = $env:TEMP
New-Item -ItemType Directory -Force -Path $env:COREPACK_HOME, $env:TEMP | Out-Null
Write-Host "Node: $(& $nodeExe --version)"
Write-Host "pnpm: $(& $corepackCmd pnpm --version)"

if (-not $SkipInstall) {
  Push-Location $root
  try {
    $lockfile = Join-Path $root 'pnpm-lock.yaml'
    $lockText = if (Test-Path -LiteralPath $lockfile) { Get-Content -Raw $lockfile } else { '' }
    if ($lockText -match '(?m)^    dependencies:' -and $lockText -match '(?m)^    devDependencies:') {
      & $corepackCmd pnpm install --frozen-lockfile
    } else {
      & $corepackCmd pnpm install --no-frozen-lockfile
    }
    if ($LASTEXITCODE -ne 0) { throw "Dependency installation failed with exit code $LASTEXITCODE." }
  } finally {
    Pop-Location
  }
}


