const chalk = require('chalk')
console.log(chalk.yellow.bold('Success in green !!!'))

const log = console.log
log(chalk.blue.underline('Hello World in blue !!!'))
log(chalk.green.inverse('This is a message in purple !!'))
log(chalk.black.bgWhite.bold('Letras negras con fondo blanco !!!'))
log(chalk.red.bold('-----------------------'))
log('process.argv: ',process.argv)