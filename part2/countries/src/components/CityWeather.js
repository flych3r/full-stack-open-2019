import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CityWeather = ({ city }) => {
  
  const [ weather, setWeather] = useState(null)

  useEffect(() => {
    console.log('effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${city}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data.current)
      })
  }, [city])

  if(weather === null)
    return <></>
  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>temperatute: {weather.temperature} Celsius</p>
      <img src={weather.weather_icons[0]} alt="weather icon" width="10%"></img>
      <p>wind: {weather.wind_speed} kph direction {weather.wind_dir}</p>
    </div>
  )
}

export default CityWeather