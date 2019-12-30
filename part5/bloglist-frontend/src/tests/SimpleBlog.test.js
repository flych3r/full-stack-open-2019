import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from '../components/SimpleBlog'

test('should render title, author and likes', () => {
  const blog = {
    title: 'A simple blog',
    author: 'Author Blog',
    likes: 5,
  }

  const component = render(
    <SimpleBlog blog={blog} />,
  )

  const hasTitleAuthor = component.container.querySelector('.title-author')
  expect(hasTitleAuthor).toHaveTextContent(
    'A simple blog Author Blog',
  )

  const hasLikes = component.container.querySelector('.likes')
  expect(hasLikes).toHaveTextContent(
    'blog has 5 likes',
  )
})

test('should call function twice when pressing button twice', () => {
  const blog = {
    title: 'A simple blog',
    author: 'Author Blog',
    likes: 5,
  }
  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />,
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})
