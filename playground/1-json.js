const fs = require('fs')

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const parseData = JSON.parse(dataJSON) 
// console.log('parseData: ',parseData)

const dataBuffer = fs.readFileSync('1-json.json')
console.log('dataBuffer: ',dataBuffer)
const dataJSON = dataBuffer.toString()
console.log('dataJSON: ',dataJSON)
let parseData = JSON.parse(dataJSON)
console.log('parseData: ',parseData)
const largo = parseData.length
const objeto = {name:'Ana', planet:'SaturnoMercurio', age:55}
parseData = [...parseData, objeto]
console.log('parseData: ',parseData)

const stringData = JSON.stringify(parseData)
fs.writeFileSync('1-json.json',stringData)
// fs.appendFileSync('1-json.json',stringData)
// fs.appendFileSync('1-json.json','/n')