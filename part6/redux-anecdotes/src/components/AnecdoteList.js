import React from 'react'
import Anecdote from './Anecdote'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
  return (
    <div>
      {store.getState().map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
            store.dispatch(upvoteAnecdote(anecdote.id))
          }
        />)}
    </div>
  )
}

export default AnecdoteList
