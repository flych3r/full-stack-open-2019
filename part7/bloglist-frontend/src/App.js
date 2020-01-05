import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userType } from './types'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import BlogForm from './components/BlogForm'
import Toggagle from './components/Toggable'
import Notification from './components/Notification'
import { initializeBlogs } from './reducers/blogReducer'
import { restoreUser } from './reducers/loginReducer'

function App(props) {
  const initializa = props.initializeBlogs
  const restore = props.restoreUser

  useEffect(() => {
    initializa()
  }, [initializa])

  useEffect(() => {
    restore()
  }, [restore])

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
      <Notification />
      {props.user === null ? loginForm() : loggedIn()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

App.propTypes = {
  initializeBlogs: PropTypes.func.isRequired,
  restoreUser: PropTypes.func.isRequired,
  user: userType,
}

App.defaultProps = {
  user: null,
}

export default connect(
  mapStateToProps,
  { initializeBlogs, restoreUser },
)(App)
