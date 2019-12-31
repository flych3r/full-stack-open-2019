import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
 return (
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => props.upvoteAnecdote(anecdote)}
        />)}
    </div>
  )
}

const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(anecdote => 
    anecdote.content.toLowerCase().includes(filter)
  ).sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

export default connect(
  mapStateToProps,
  { upvoteAnecdote }
)(AnecdoteList)
