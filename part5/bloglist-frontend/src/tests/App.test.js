import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  test('should not render blogs if no user logged', async () => {
    const component = render(
      <App />,
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('h2'),
    )

    const header = component.container.querySelector('h2')
    expect(header).toHaveTextContent('log in to application')

    const blogs = component.container.querySelectorAll('.title-author')
    expect(blogs.length).toBe(0)
  })

  test('should render blogs if user is logged', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester',
    }
    localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

    const component = render(
      <App />,
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('h2'),
    )

    const header = component.container.querySelector('h2')
    expect(header).toHaveTextContent('blogs')

    const blogs = component.container.querySelectorAll('.title-author')
    expect(blogs.length).toBe(3)
  })
})
