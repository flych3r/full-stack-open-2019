import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import BlogForm from './components/BlogForm'
import Toggagle from './components/Toggable'
import Notification from './components/Notification'
import { initializeBlogs } from './reducers/blogReducer'
import { restoreUser } from './reducers/loginReducer'

function App(props) {
  const [message, setMessage] = useState(null)
  const [messageColor, setMessageColor] = useState('')

  useEffect(() => {
    props.initializeBlogs()
  }, [])

  useEffect(() => {
    props.restoreUser()
  }, [])

  const showBlogs = () => <BlogList />

  const loginForm = () => <LoginForm />

  const logoutForm = () => <LogoutForm />

  const blogForm = () => (
    <Toggagle buttonLabel="new blog">
      <BlogForm />
    </Toggagle>
  )

  const loggedIn = () => (
    <div>
      <h2>blogs</h2>
      <p>
        {`${props.user.name} logged in`}
        {logoutForm()}
      </p>
      {blogForm()}
      {showBlogs()}
    </div>
  )

  return (
    <div>
      <Notification message={message} color={messageColor} />
      {props.user === null ? loginForm() : loggedIn()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(
  mapStateToProps,
  { initializeBlogs, restoreUser }
)(App)
