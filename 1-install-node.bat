@echo off
@echo Installing Node.js. This will take a few minutes...
start /wait msiexec.exe /i https://nodejs.org/dist/v14.18.0/node-v14.18.0-x86.msi /passive
@echo Setting up Lunchtime App...
npm run setup
npm run svc-install