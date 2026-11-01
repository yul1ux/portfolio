@echo off
setlocal
set "PROJECT_ROOT=%~dp0.."
set "NODE_DIR=%PROJECT_ROOT%\.tools\node-v24.22.1-win-x64"
set "COREPACK_HOME=%PROJECT_ROOT%\.tools\corepack"
set "TEMP=%PROJECT_ROOT%\.tools\tmp"
set "TMP=%TEMP%"
set "PATH=%NODE_DIR%;%PATH%"
"%NODE_DIR%\node.exe" %*
exit /b %ERRORLEVEL%
