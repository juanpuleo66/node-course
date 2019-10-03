const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes ....'
}  

const addNote = (title, body) => {
  const notes = loadNotes()
  const noteFound = notes.find(note => note.title === title)

  if (noteFound) {
    console.log(chalk.bgRed.bold(`Error, note: ${title} taken !!!`))
  } else {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen.bold(`New note: ${title} added !!!`))
  }  
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes-19.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes-19.json')
    const dataJSON = dataBuffer.toString()
    return  JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}  