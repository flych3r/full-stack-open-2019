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
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  }

  logger.error(error.name)

  next(error)
}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  const valid_authorization = authorization && authorization.toLowerCase().startsWith('bearer ')
  const token = valid_authorization ? authorization.substring(7) : null
  request.token = token
  next()
}

module.exports = {
  morgan,
  unknownEndpoint,
  errorHandler,
  tokenExtractor
}
