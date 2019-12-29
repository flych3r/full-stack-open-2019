import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'

function App() {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [messageColor, setMessageColor] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(async () => {
    setBlogs(await blogService.getAll())
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const usr = JSON.parse(loggedUserJSON)

      blogService.setToken(usr.token)
      setUser(usr)
    }
  }, [])

  const showBlogs = () => blogs.map((blog) => <Blog key={blog.id} blog={blog} />)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const usr = await loginService.login({ username, password })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(usr))
      blogService.setToken(usr.token)

      setUser(usr)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage('wrong username or password')
      setMessageColor('red')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.clear()
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      title,
      author,
      url,
    }

    const returnedBlog = await blogService.create(blogObject)
    setBlogs(blogs.concat(returnedBlog))
    setMessage(`a new blog ${title} by ${author} added`)
    setMessageColor('green')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const loginForm = () => (
    <LoginForm
      username={username}
      password={password}
      handleLogin={handleLogin}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  )

  const logoutForm = () => (
    <LogoutForm handleLogout={handleLogout} />
  )

  const blogForm = () => (
    <BlogForm
      newTitle={title}
      handleTitleChange={handleTitleChange}
      newAuthor={author}
      handleAuthorChange={handleAuthorChange}
      newUrl={url}
      handleUrlChange={handleUrlChange}
      addBlog={addBlog}
    />
  )

  const loggedIn = () => (
    <div>
      <h2>blogs</h2>
      <p>
        {user.name}
        logged in
        {logoutForm()}
      </p>
      {blogForm()}
      {showBlogs()}
    </div>
  )

  return (
    <div>
      <Notification message={message} color={messageColor} />
      {user === null ? loginForm() : loggedIn()}
    </div>
  )
}

export default App
