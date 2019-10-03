const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes-19.js')

//Customize yargs version --> node app.js --version
yargs.version('1.2.3')

//Call the help option --> node app.js --help

//Create add command --> node app.js add
yargs.command({
  command: 'add',
  describe: 'Add a new note --help',
  builder: {
    title: {
      describe: 'add.builder.title.describe',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'add.body.title.describe',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {   
    notes.addNote(argv.title, argv.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note --help',
  builder: {
    title: {
      describe: 'remove.builder.title.describe',
      demandOption: true,
      type: 'boolean'
    },
  },
  handler: (argv) => {
    console.log('Title: ' + argv.title)
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: () => {
    console.log('Reading a note')
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: () => {
    console.log('Listing all the notes')
  }
})

yargs.parse()