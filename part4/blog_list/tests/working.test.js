const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }
]

describe('dummy', () => {
  test('dummy returns one', () => {
    expect(listHelper.dummy(blogs)).toBe(1)
  })
})

describe('totalLikes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blog = {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }
    expect(listHelper.totalLikes([blog])).toBe(7)
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.totalLikes(blogs)).toBe(36)
  })
})

describe('favoriteBlog', () => {
  test('of empty list is undefined', () => {
    expect(listHelper.favoriteBlog([])).toEqual(undefined)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blog = {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }
    expect(listHelper.favoriteBlog([blog])).toEqual({ author: 'Michael Chan', title: 'React patterns', likes: 7 })
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.favoriteBlog(blogs)).toEqual({ author: 'Edsger W. Dijkstra', title: 'Canonical string reduction', likes: 12 })
  })
})

describe('mostBlogs', () => {
  test('of empty list is undefined', () => {
    expect(listHelper.mostBlogs([])).toEqual(undefined)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blog ={
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }
    expect(listHelper.mostBlogs([blog])).toEqual({ author: 'Michael Chan', blogs: 1 })
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.mostBlogs(blogs)).toEqual({ author: 'Robert C. Martin', blogs: 3 })
  })
})

describe('mostLikes', () => {
  test('of empty list is undefined', () => {
    expect(listHelper.mostLikes([])).toEqual(undefined)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blog ={
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }
    expect(listHelper.mostLikes([blog])).toEqual({ author: 'Michael Chan', likes: 7 })
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.mostLikes(blogs)).toEqual({ author: 'Edsger W. Dijkstra', likes: 17 })
  })
})
