const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controllers/blog')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

const app = express()

logger.info('connecting to', config.MONGODB_URI)

mongoose.set('useFindAndModify', false)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    logger.info('connected to MongoDB')
  )
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
if (process.env.NODE_ENV !== 'test') {
  app.use(middleware.morgan(':method :url :status :res[content-length] - :response-time ms :body'))
}
app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
