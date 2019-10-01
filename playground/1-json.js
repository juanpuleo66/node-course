const fs = require('fs')

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-JSON.json', bookJSON)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const parseData = JSON.parse(dataJSON) 
console.log('parseData: ',parseData)