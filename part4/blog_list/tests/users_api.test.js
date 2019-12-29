const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const User = require('../models/user')

describe('when there are some users on the db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.initialUsers)
  })

  test('users are returned as json', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all users are returned', async () => {
    const response = await api.get('/api/users')

    expect(response.body.length).toBe(helper.initialUsers.length)
  })

  test('a specific user is within the returned users', async () => {
    const response = await api.get('/api/users')
    const usernames = response.body.map(r => r.username)
    expect(usernames).toContain('mluukai')
  })

  describe('adding a new user', () => {
    test('succeeds with valid data', async () => {
      const newUser = {
        username: 'new_user',
        password: 'newuser'
      }

      const res = await api
        .post('/api/users')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const usersAtEnd = await helper.usersInDb()

      expect(usersAtEnd.length).toBe(helper.initialUsers.length + 1)
      expect(usersAtEnd).toContainEqual(res.body)
    })

    test('fails with status code 400 if username invaild', async () => {
      const newUser = {
        username: 'nu',
        password: 'newuser'
      }

      await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

      const usersAtEnd = await helper.usersInDb()

      expect(usersAtEnd.length).toBe(helper.initialUsers.length)
    })

    test('fails with status code 400 if password invaild', async () => {
      const newUser = {
        username: 'newuser',
        password: 'nu'
      }

      await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

      const usersAtEnd = await helper.usersInDb()

      expect(usersAtEnd.length).toBe(helper.initialUsers.length)
    })

    test('fails with status code 400 if username duplicated', async () => {
      const newUser = {
        username: 'hellas',
        name: 'New User',
        password: 'newuser'
      }

      await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

      const usersAtEnd = await helper.usersInDb()

      expect(usersAtEnd.length).toBe(helper.initialUsers.length)
    })

    test('contains the correct fields', async () => {
      const newUser = {
        username: 'new_user',
        name: 'New User',
        password: 'newuser'
      }

      const res = await api
        .post('/api/users')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const usersAtEnd = await helper.usersInDb()

      expect(usersAtEnd.length).toBe(helper.initialUsers.length + 1)

      expect(res.body.id).toBeDefined()
      expect(res.body.passwordHash).not.toBeDefined()
      expect(res.body._id).not.toBeDefined()
      expect(res.body.__v).not.toBeDefined()
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})
