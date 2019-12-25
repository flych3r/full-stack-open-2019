import React from 'react'

const Filter = ({ filterName, handleFilterChange }) => {
  
  return (
    <input value={filterName} onChange={handleFilterChange}/>
  )
}

export default Filter
