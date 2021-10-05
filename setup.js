const fs = require('fs')
const prompts = require('prompts')

;(async () => {
    const response = await prompts([
        {
            type: 'text',
            name: 'PRINTER',
            message: 'What is the name of the printer?',
            initial: 'Lunchtime'
        },
        {
            type: 'text',
            name: 'FOLDER',
            message: 'What is the directory PDF orders will be downloaded to?',
            initial: 'C:/Users/.../Test-Orders',
            validate: value => {
                if (fs.existsSync(value) && fs.lstatSync(value).isDirectory()) {
                    return true
                }

                return 'Please enter a valid directory'
            }
        }
    ]);

    fs.writeFileSync('.env',
        'PRINTER=' + response.PRINTER + "\n" +
        "FOLDER='" + response.FOLDER + "'"
    )
})()