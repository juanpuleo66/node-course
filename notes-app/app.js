const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize yargs version --> node app.js --version
yargs.version('1.2.3')

//Call the help option --> node app.js --help

//Create add command --> node app.js add
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note')
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing the note')
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: () => {
    console.log('Reading the note')
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: () => {
    console.log('Listing the note')
  }
})


console.log(yargs.argv)