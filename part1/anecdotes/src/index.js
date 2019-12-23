import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ShowAnectote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const randomAnectode = () => () =>
    setSelected(getRandomInt())

  const handleVote = (anecdote) => () => {
    const copy = [...votes]
    copy[anecdote] += 1     
    setVotes(copy)
    console.log(copy)
  }

  const mostVotes = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anectdote of the day</h1>
      <ShowAnectote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleVote(selected)}>
        vote
      </button>
      <button onClick={randomAnectode()}>
        next anecdote
      </button>
      <h1>Anectdote with most votes</h1>
      <ShowAnectote anecdote={props.anecdotes[mostVotes()]} votes={votes[mostVotes()]} />
    </div>
  )
}

const getRandomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(anecdotes.length);
  return Math.floor(Math.random() * (max - min)) + min;
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
