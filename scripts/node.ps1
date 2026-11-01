$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$node = Join-Path $root '.tools\node-v24.22.1-win-x64\node.exe'
if (-not (Test-Path -LiteralPath $node)) { throw 'Run .\scripts\setup.ps1 first.' }
& $node @args
exit $LASTEXITCODE
