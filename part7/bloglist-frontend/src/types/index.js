/* eslint-disable import/prefer-default-export */
import {
  shape, string, number, any,
} from 'prop-types'

export const blogType = shape({
  title: string.isRequired,
  author: string,
  url: string.isRequired,
  likes: number,
  user: shape({
    username: string.isRequired,
    name: string,
    blogs: any,
  }),
})

export const notificationType = shape({
  message: string,
  color: string,
})

export const userType = shape({
  token: string.isRequired,
  name: string.isRequired,
  username: string.isRequired,
})
