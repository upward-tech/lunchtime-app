const fs = require('fs')

if (! fs.existsSync('.env')) {
    console.log('Copying .env.example to .env...')
    fs.copyFileSync('.env.example', '.env')

    console.log('Please set your variables in .env')
}
