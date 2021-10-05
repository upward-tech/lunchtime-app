@echo off
@echo Installing Node.js. This will take a few minutes...
start /wait msiexec.exe /i https://nodejs.org/dist/v14.18.0/node-v14.18.0-x86.msi /passive
@echo Setting up Lunchtime App...
call npm install --silent
call node setup.js
call npm run svc-install