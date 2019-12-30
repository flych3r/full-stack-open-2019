import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    store.dispatch(
      createAnecdote(content)
    )
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
