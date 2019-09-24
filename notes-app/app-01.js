const fs = require('fs')

// fs.writeFileSync('notes.txt','1-Primera linea usando wirite\n')
fs.appendFileSync('notes.txt','1-Segunda linea usando append\n')
fs.appendFileSync('notes.txt','2-Segunda linea usando append\n')
fs.appendFileSync('notes.txt','3-Tercera linea usando append\n')
fs.appendFileSync('notes.txt','4-Cuarta linea usando append\n\n')

