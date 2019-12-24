import React from 'react'
import DetailCountry from './DetailCountry'

const ShowCountries = ({ countries, detailed, detailEvent }) => {
  
  if (countries.length > 10)
    return <p>To many matches, specify another filter</p>

  if (countries.length === 1)
    return <DetailCountry country={countries[0]} />
  
  return (
    countries.map((country, i) => 
      <div key={country.alpha3Code}>
          {country.name} <button onClick={() => detailEvent(i)}>{detailed[i] ? "hide" : "show"}</button>
          {detailed[i] ? <DetailCountry country={countries[i]} /> : ""}
      </div>
    )
  )
}

export default ShowCountries