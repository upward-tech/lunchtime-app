const pdfToPrinter = require('pdf-to-printer')
require('dotenv').config()
const chokidar = require('chokidar');

console.log('Printing from path: ' + process.env.FOLDER);
console.log('Printing to printer: ' + process.env.PRINTER);

function printNewPDF(path) {
    console.log('New order received. Printing: ' + path)
    try {
        pdfToPrinter.print(path, {printer: process.env.PRINTER})
    } catch (e) {
        console.log('Failed to print: ' + path)
        console.error(e)
    }
}

const watcher = chokidar.watch(process.env.FOLDER, {ignored: /^\./, persistent: true, ignoreInitial: true, depth: 3});

// This watches for new files in the folder
watcher.on('add', printNewPDF)

if (process.env.PRINTER === null || process.env.PRINTER === '') {
    pdfToPrinter.getPrinters().then((printers) => {
        console.log('Available printers:')
        console.log(printers)
    })
}