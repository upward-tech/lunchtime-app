# FIRST TIME SETUP
1. Download ZIP from Github
2. Run `1-install-node.bat`
3. Run `2-install-lunchtime.bat`
4. In Windows Services, stop the `Lunchtime App` service
5. Update and save the printer name and folder path to watch in `.env`
6. In Windows Services, start the `Lunchtime App` service

# DOWNLOADING AN UPDATE
1. Uninstall old service by running `npm run svc-uninstall` in the directory of the old version.
2. Follow steps above (minus installing node)

# RUN LOCALLY IN DEV MODE
> Mostly useful for development
- Run with: `npm start`
