const validator = require('validator')

const isEmail = validator.isEmail('nombre.apellido@gmail.com')
console.log('isEmail: ',isEmail)

const isURL = validator.isURL('https://www.npmjs.com/package/validator',{ protocols: ['http','https','ftp']})
console.log('isURL: ',isURL)