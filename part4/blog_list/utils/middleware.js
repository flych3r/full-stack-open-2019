const morgan = require('morgan')
const logger = require('./logger')

morgan.token('body', (request, response) => {
  if (request.method === 'POST' || request.method === 'PUT')
    return JSON.stringify(request.body)
  return null
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  logger.error(error.message)

  next(error)
}

module.exports = {
  morgan,
  unknownEndpoint,
  errorHandler
}
