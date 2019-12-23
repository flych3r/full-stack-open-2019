import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ event, title }) => (
  <button onClick={event}>
    {title}
  </button>
)

const Statistics = ({ feed, allFeedbacks }) => {
  const {good, neutral, bad} = feed
  console.log("good=", good, "neutral=", neutral,
    "bad=", bad, "allFeedbacks=", allFeedbacks)

  if (allFeedbacks.length === 0)
    return "No feedback given"
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const averageFeedback = () => {
    // return (good * (1) + bad * (-1)) / (good + bad + neutral)
    const sum = allFeedbacks.reduce(reducer, 0)
    return sum / allFeedbacks.length
  }

  const filterer = (value) => value === 1
  const goodPercentage = () => {
    // return good / allFeedbacks.length
    return (allFeedbacks.filter(filterer).length / allFeedbacks.length).toString() + " %"
  }

  return (
    <table>
      <tbody>
        <Statistic title="good" value={good} />
        <Statistic title="neutral" value={neutral} />
        <Statistic title="bad" value={bad} />
        <Statistic title="all" value={allFeedbacks.length} />
        <Statistic title="average" value={averageFeedback()} />
        <Statistic title="positive" value={goodPercentage()} />
      </tbody>
    </table>
  )
}

const Statistic = ({ title, value }) => <tr><td>{title}</td><td>{value}</td></tr>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAll] = useState([])

  const feed = {
      good: good,
      neutral: neutral,
      bad: bad
  }

  const increaseFeedback = (value, score, feedback) => () => {
    feedback(value + 1)
    setAll(allFeedbacks.concat(score))
  }

  return (
  <div>
    <h1>give feedback</h1>
    <Button event={increaseFeedback(good, 1, setGood)}
        title="good" />
    <Button event={increaseFeedback(neutral, 0, setNeutral)}
        title="neutral" />
    <Button event={increaseFeedback(bad, -1, setBad)}
        title="bad" />
    <h1>statistics</h1>
    <Statistics feed={feed} allFeedbacks={allFeedbacks} />
  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
