import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from '../components/Blog'

test('should render only title, author by default', () => {
  const blog = {
    title: 'A simple blog',
    author: 'Author Blog',
    url: 'some.url.com',
    likes: 5,
  }
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} likeBlog={mockHandler} removeBlog={mockHandler} />,
  )

  const hasTitleAuthor = component.container.querySelector('.title-author')

  expect(hasTitleAuthor).toHaveTextContent(
    'A simple blog by Author Blog',
  )

  const allInfo = component.container.querySelector('.all-info')
  expect(allInfo).toHaveStyle('display: none')
})

test('should show and hide all info when clicking name', () => {
  const blog = {
    title: 'A simple blog',
    author: 'Author Blog',
    url: 'some.url.com',
    likes: 5,
  }
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} likeBlog={mockHandler} removeBlog={mockHandler} />,
  )

  const clickTitleAuthor = component.container.querySelector('.title-author')

  let allInfo = component.container.querySelector('.all-info')
  expect(allInfo).toHaveStyle('display: none')

  fireEvent.click(clickTitleAuthor)

  allInfo = component.container.querySelector('.all-info')
  expect(allInfo).not.toHaveStyle('display: none')

  fireEvent.click(clickTitleAuthor)

  allInfo = component.container.querySelector('.all-info')
  expect(allInfo).toHaveStyle('display: none')
})
