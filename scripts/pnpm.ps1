$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$nodeDirectory = Join-Path $root '.tools\node-v24.22.1-win-x64'
$corepack = Join-Path $nodeDirectory 'corepack.cmd'
if (-not (Test-Path -LiteralPath $nodeDirectory) -or -not (Test-Path -LiteralPath $corepack)) {
  throw 'Run .\scripts\setup.ps1 first.'
}
$env:PATH = "$nodeDirectory;$env:PATH"
$env:COREPACK_HOME = Join-Path $root '.tools\corepack'
$env:TEMP = Join-Path $root '.tools\tmp'
$env:TMP = $env:TEMP
New-Item -ItemType Directory -Force -Path $env:COREPACK_HOME, $env:TEMP | Out-Null
& $corepack pnpm @args
exit $LASTEXITCODE
