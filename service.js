// Get arguments (first two arguments are node service.js)
const args = process.argv.slice(2)

// If called with no arguments
if (args.length === 0) {
    console.log('run with install or uninstall')
}

// Requirements
const Service = require('node-windows').Service

// Pulls version number from version.js
const VERSION = require('./version').VERSION

const path = require('path')

// Service object describes the service to Windows Services
var svc = new Service({
    name: 'Lunchtime App v' + VERSION,
    description: 'A simple service to print new PDF meal orders',
    script: path.join(__dirname, 'app.js'),
    workingDirectory: __dirname
})

if (args[0] === 'install') {
    console.log('Installing Service: Lunchtime App v' + VERSION)

    // Subscribing to event so that when it's successful it can .start()
    svc.on('install', function(){
        console.log('Starting Service: Lunchtime App v' + VERSION)
        svc.start()
    });

    // This is what installed the svc object
    svc.install()

} else if (args[0] === 'uninstall') {
    console.log('Uninstalling Service: Lunchtime App v' + VERSION)
    svc.uninstall()
}
