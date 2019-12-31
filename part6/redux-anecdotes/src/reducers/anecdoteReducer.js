import anecdoteService from '../services/anecdotes'
import { showNotification } from '../reducers/notificationReducer'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPVOTE':
      const votedAnecdote = action.data
      return state.map(anecdote => 
        (anecdote.id === votedAnecdote.id ? votedAnecdote : anecdote)
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
    return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const upvoteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.updateVotes(anecdote)
    dispatch({
      type: 'UPVOTE',
      data: votedAnecdote
    })
    dispatch(showNotification(`you voted ${anecdote.content}`, 5))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer
