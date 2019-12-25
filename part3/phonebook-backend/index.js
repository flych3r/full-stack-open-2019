require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Person = require('./models/persons')

const app = express()

app.use(cors())
app.use(express.static('build'))

app.use(bodyParser.json())

morgan.token('body', (request, _) => {
  if (request.method === 'POST' || request.method === 'PUT') return JSON.stringify(request.body)
  return null
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/info', (_, response) => {
  Person.countDocuments({}, (_, count) => {
    let text = `Phonebook has info for ${count} people\n`
    text += Date()
    response.send(text)
  })
})

app.get('/api/persons', (_, response) => {
  Person.find({}).then((persons) => {
    response.json(persons.map((person) => person.toJSON()))
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) response.json(person.toJSON())
      else response.status(404).end()
    })
    .catch((error) => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((_) => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const { body } = request

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((_person) => {
      if (_person) response.json(_person.toJSON())
      else response.status(404).end()
    })
    .catch((error) => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const { body } = request

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then((savedPerson) => {
      response.json(savedPerson.toJSON())
    })
    .catch((error) => next(error))
})

const unknownEndpoint = (_, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, _, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') return response.status(400).send({ error: 'malformated id' })
  if (error.name === 'ValidationError') return response.status(400).send({ error })

  next(error)
}

app.use(errorHandler)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
