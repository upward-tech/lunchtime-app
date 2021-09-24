// EXPRESS IS A FAST MINIMALIST WEB FRAMEWORK 
// ALLOWING A SIMPLE HTTP ENDPOINT TO RECEIVE 
// A POST REQUEST WITH A PDF FILE

// const express = require('express')
// const app = express()
// const port = 3000
// const { getProductData, productSearch } = require('./currey')

// FILE SYSTEM LIBRARY
// const fs = require('fs')

// USED TO DOWNLOAD TEAR SHEET
// const axios = require('axios')
// const path = require('path')

// PDF TO PRINTER LIBRARY
const pdfToPrinter = require('pdf-to-printer')
require('dotenv').config()
// const nodemailer = require('nodemailer')

// app.use(express.static('public'))
// app.use(express.json())

// THIS IS FROM STACK OVERFLOW
const chokidar = require('chokidar');
// const { pathToFileURL } = require('url')
const log = console.log.bind(console);
console.log(process.env.FOLDER);
console.log(process.env.PRINTER);

// THIS FUNCTION WORKS IN COMMAND LINE
// pdfToPrinter.print('C:/Users/aw/Work Drive/appsheet/data/Lunch-2353819/C - Client, Onbding/Currey & Company/Lunch Ordering System/Orders/CurreyLunchtimeOrder20210923_205325_300.pdf', {printer: process.env.PRINTER})

// Create the new PDF printing function
let printNewPDF = path => pdfToPrinter.print(path, {printer: process.env.PRINTER})

const watcher = chokidar.watch(process.env.FOLDER, {ignored: /^\./, persistent: true, ignoreInitial: true});
watcher
    // .on('add', path => log(`Directory ${path} has been added`))
    .on('add', printNewPDF)
    
    // .on('add', path => pdfToPrinter.print(path, {printer: process.env.PRINTER}))

    // .on('change', function(path) {console.log('File', path, 'has been changed');})
    // .on('unlink', function(path) {console.log('File', path, 'has been removed');})
    // .on('error', function(error) {console.error('Error happened', error);})



// THIS IS FROM MEDIUM
/* app.post('', express.raw({ type: 'application/pdf' }), async(req, res) => {

    const options = {};
    if (req.query.printer) {
        options.printer = req.query.printer;
    }
    // const tmpFilePath = path.join(`./tmp/${Math.random().toString(36).substr(7)}.pdf`);

    fs.writeFileSync(tmpFilePath, req.body, 'binary');
    await ptp.print(tmpFilePath, options);
    fs.unlinkSync(tmpFilePath);

    res.status(204);
    res.send();
});

app.listen(port, () => {
    console.log(`PDF Printing Service listening on port ${port}`)
}); */

/* ADAM CODE
app.get('/api/products/search/:sku', async (request, response) => {
    try {
        console.log('/api/products/search/' + request.params.sku)
        const productData = await productSearch(request.params.sku)
        response.send(productData)
    } catch (e) {
        console.log(e.code)
        if (e.errno === 'ENOTFOUND') {
            response.send({ error: "Couldn't connect to curreyandcompany.com. Please try again." })
            return;
        }

        console.log(e)
        response.send({ error: e+""})
    }
})

app.get('/api/products/:sku', async (request, response) => {
    try {
        console.log('/api/products/' + request.params.sku)
        const productData = await getProductData(request.params.sku)
        response.send(productData)
    } catch (e) {
        console.log(e.code)
        if (e.errno === 'ENOTFOUND') {
            response.send({ error: "Couldn't connect to curreyandcompany.com. Please try again." })
            return;
        }

        console.log(e)
        response.send({ error: e+""})
    }
})

app.post('/api/products/:sku/print', async (request, response) => {
    try {
        console.log('/api/products/' + request.params.sku + '/print')
        const productData = await getProductData(request.params.sku)
        const path = await downloadFile(productData.tearsheet)
        const result = await pdfToPrinter.print(path, {
            printer: process.env.PRINTER
        })
        response.send({ success: true })
    } catch (e) {
        console.log(e)
        response.send({ error: e+""})
    }
})

app.post('/api/products/:sku/email', async (request, response) => {
    try {
        console.log('/api/products/' + request.params.sku + '/email')
        const productData = await getProductData(request.params.sku)
        const path = await downloadFile(productData.tearsheet)

        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.SMTP_FROM, // sender address
            to: request.body.to, // list of receivers
            subject: "Currey & Company - " + request.params.sku + " Tearsheet", // Subject line
            text: "Attached is the requested tearsheet.", // plain text body
            html: "Attached is the requested tearsheet.", // html body
            attachments: [
                {
                    filename: request.params.sku + '.pdf',
                    path
                }
            ]
        });

        response.send({ success: true })
    } catch (e) {
        console.log(e)
        response.send({ error: e+""})
    }
})

if (process.env.PRINTER === null || process.env.PRINTER === '') {
    pdfToPrinter.getPrinters().then((printers) => {
        console.log('Available printers:')
        console.log(printers)
    })
} else {
    app.listen(port, () => {
        console.log(`Tear sheet printer listening at http://localhost:${port}`)
    })
} */



/* async function downloadFile(url) {
    const response = await axios.get(url, {
        responseType: 'arraybuffer'
    })

    const outputFilename = path.join(__dirname, 'download', Math.round(Math.random() * 10000000000) + '.pdf');
    fs.writeFileSync(outputFilename, response.data);
    return outputFilename;
} */