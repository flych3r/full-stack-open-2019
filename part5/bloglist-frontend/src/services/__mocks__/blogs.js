const blogs = [
  {
    _id: '5e090acaf8b9941d2e577183',
    likes: 0,
    title: 'Yangi',
    author: 'Martin Fowler',
    url: 'https://martinfowler.com/bliki/Yagni.html',
    user: {
      username: 'mluukai',
      name: 'Matti Luukkainen',
    },
    __v: 8,
  },
  {
    _id: '5e0908baf8b9941d2e577182',
    likes: 0,
    title: 'Things I Don’t Know as of 2018',
    author: 'Dan Abramov',
    url: 'https://overreacted.io/things-i-dont-know-as-of-2018/',
    user: {
      username: 'hellas',
      name: 'Artho Hellas',
    },
    __v: 3,
  },
  {
    _id: '5e08ab5c766e4642151b21d7',
    likes: 100002,
    title: 'Google',
    url: 'http://wwww.google.com',
    __v: 0,
    author: null,
  },
]

const setToken = () => {}

const getAll = () => Promise.resolve(blogs)

export default {
  getAll,
  setToken,
}
