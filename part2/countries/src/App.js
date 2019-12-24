import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ShowCountries from './components/ShowCountries'

const App = () => {
  
  const [ countries, setCountries] = useState([])
  const [ find, setFind ] = useState('')
  const [ details, setDetails] = useState([])

  const handleFindChange = (event) => {
    setFind(event.target.value)
    setDetails(new Array(countriesToShow.length).fill(false))
  }

  const handleDetail = (i) => {
    const copy = [...details]
    copy[i] = !copy[i]
    setDetails(copy)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('response', countries.length, 'countries')

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(find.toLowerCase()))
  
  return (
    <div>
      find countries <input value={find} onChange={handleFindChange}></input>
      <ShowCountries countries={countriesToShow} 
        detailed={details} detailEvent={handleDetail}/>
    </div>
  )
}

export default App
