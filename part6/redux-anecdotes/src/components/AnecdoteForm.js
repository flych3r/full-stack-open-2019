import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  return (
    <form onSubmit={props.createAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: event => {
      event.preventDefault()
      dispatch(createAnecdote(event.target.anecdote.value))
      event.target.anecdote.value = ''
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
