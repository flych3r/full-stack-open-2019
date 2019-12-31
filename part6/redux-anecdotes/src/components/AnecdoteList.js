import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
 return (
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => props.vote(anecdote)}
        />)}
    </div>
  )
}

const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    vote: anecdote => {
      dispatch(upvoteAnecdote(anecdote.id))
      dispatch(showNotification(`you voted ${anecdote.content}`))
      setTimeout(() => {
        dispatch(hideNotification())
      }, 5000)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
