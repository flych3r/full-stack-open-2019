import React from 'react'
import Course from './components/Course'

const Courses = ({ courses }) => {
  
  const rows = () =>
    courses.map(course => <Course key={course.id} name={course.name} parts={course.parts}/>)

  return (
    <ul>
      {rows()}
    </ul>
  )
}

const App = ({ courses }) => <Courses courses={courses} />


export default App
