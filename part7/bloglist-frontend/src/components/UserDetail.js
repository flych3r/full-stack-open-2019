import React from 'react'
import { userType } from '../types'

const UserDetail = ({ user }) => (
  <div className="user-detail">
    <h3>{user.name}</h3>
    <h5>added blogs</h5>
    <ul>
      {user.blogs.map((blog) => <li>{blog.title}</li>)}
    </ul>
  </div>
)

UserDetail.propTypes = {
  user: userType.isRequired,
}

export default UserDetail
