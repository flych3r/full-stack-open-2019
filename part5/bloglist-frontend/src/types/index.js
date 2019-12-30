/* eslint-disable import/prefer-default-export */
import {
  shape, string, number, func, any,
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

export const formType = shape({
  type: string,
  value: string,
  onChange: func,
  reset: func,
})
