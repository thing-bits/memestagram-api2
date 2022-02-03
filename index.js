const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

;(async function dbConnect() {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      dbName: 'memenstagram'
    })
    console.log('Conectado a la DB')
  } catch (error) {
    throw new Error ('Cannot connect to DB')
  }
})()

const app = express()

try  {
  app
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', require('./src/routes'))
    .use('/', (req, res) => {
      res.send('Welcome to Memestagram API')
    })
    .listen(3000, () => {
      console.log('Server golisneando')
    })
} catch (error) {
  throw new Error (`Can't start Express: ${error}`)
}

