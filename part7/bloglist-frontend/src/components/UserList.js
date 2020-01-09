import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userType } from '../types/index'
import User from './User'
// import { likeBlog, removeBlog } from '../reducers/blogReducer'

const UserList = (props) => (
  <table>
    <tr>
      <th>User</th>
      <th>Blogs Created</th>
    </tr>
    {props.usersToShow.map((user) => (
      <User
        key={user.id}
        user={user}
      />
    ))}
  </table>
)

const usersToShow = (users) => users

const mapStateToProps = (state) => ({
  usersToShow: usersToShow(state.users),
})

UserList.propTypes = {
  usersToShow: PropTypes.arrayOf(userType).isRequired,
}

export default connect(
  mapStateToProps,
  null, // { likeBlog, removeBlog },
)(UserList)
