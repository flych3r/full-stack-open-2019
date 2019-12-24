import React from 'react'
import CityWeather from './CityWeather'

const DetailCountry = ({ country }) => {
  
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt="country flag" width="25%"></img>
      <CityWeather city={country.capital}/>
    </div>
  )
}

export default DetailCountry