import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { userType } from './types'
import BlogList from './components/BlogList'
import UserList from './components/UserList'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import Notification from './components/Notification'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { restoreUser } from './reducers/loginReducer'

function App(props) {
  const { initializeBlogs } = props
  const { initializeUsers } = props
  const restore = props.restoreUser

  useEffect(() => {
    initializeBlogs()
    initializeUsers()
  }, [initializeBlogs, initializeUsers])

  useEffect(() => {
    restore()
  }, [restore])

  const loggedIn = () => (
    <div>
      <Router>
        <Link to="/">blogs</Link>
        <Link to="/users">users</Link>
        {`${props.user.name} logged in`}
        <LogoutForm />
        <Route exact path="/" render={() => <BlogList />} />
        <Route exact path="/users" render={() => <UserList />} />
      </Router>
    </div>
  )

  return (
    <div>
      <Notification />
      {props.user === null ? <LoginForm /> : loggedIn()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

App.propTypes = {
  initializeBlogs: PropTypes.func.isRequired,
  initializeUsers: PropTypes.func.isRequired,
  restoreUser: PropTypes.func.isRequired,
  user: userType,
}

App.defaultProps = {
  user: null,
}

export default connect(
  mapStateToProps,
  { initializeBlogs, initializeUsers, restoreUser },
)(App)
