import React from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Part = ({ name, exercises }) => <li>{name} {exercises}</li>

const Content = ({ parts }) => {
  
  const rows = () =>
    parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)

  return (
    <ul>
      {rows()}
    </ul>
  )
}

const SumExercices = ({ parts }) => {

  const sumExercices = parts.reduce( (current, next) => current + next.exercises, 0 )
  
  return (
    <p>total of {sumExercices} exercises</p>
  )

}

const Course = ({name, parts}) => {

  return (
    <div>
      <Header title={name} />
      <Content parts={parts} />
      <SumExercices parts={parts} />
    </div>
  )
}

export default Course