@echo off
@echo Setting up Lunchtime App...
call npm install --silent
call node setup.js
call npm run svc-install