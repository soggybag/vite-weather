import { useState, useEffect } from "react"
import WeatherView from "./WeatherView"
import './Weather.css'

///////////////////////////////////////////////////////////////
// This component loads weather data from 
// https://openweathermap.org
// ////////////////////////////////////////////////////////////

function Weather() {
  const [zip, setZip] = useState('90210')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)  

  /////////////////////////////////////////////////////////////
  // handle Weather with useEffect
  /////////////////////////////////////////////////////////////
  useEffect(() => {
    async function loadWeather() {
        // You'll need an API KEY. Store it in .env with the 
        // name: VITE_API_KEY
        const apikey = import.meta.env.VITE_API_KEY
        try {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`)
          const data = await res.json()
          console.log(data)
          setWeatherData(data)
        } catch(error) {
          setWeatherData({ error })
        } finally {
          setLoading(false)
        }
    }
    if (loading) {
      loadWeather()
    }
  }, [loading])
  /////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////
  // Handle Weather with an async function
  /////////////////////////////////////////////////////////////
  // async function handleForm() {
  //   const apikey = import.meta.env.VITE_API_KEY
  //   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`)
  //   const data = await res.json()
  //   setWeatherData(() => data)
  //   console.log(data)
  // } 
  /////////////////////////////////////////////////////////////

  return (
    <div className="Weather">
      {/* If there is data display it otherwise nothing */}
      {weatherData && <WeatherView {...weatherData} />}
      <form
        onSubmit={(e) => {
          // We need this to prevent the browser from 
          // reloading the page when the form is submitted!
          e.preventDefault()

          // Enable this to use async
          // handleForm()

          // Enable this to use useEffect
          setLoading(true)
        }}
      >
        <input 
          value={zip}
          // Use a pattern to conform to a zip code 
          pattern="[0-9]{5}"
          onChange={(e) => setZip(e.target.value)}
        />
        {/* Disable this button with the zip does not 
            conform to a zip code */}
        <button disabled={!zip.match(/^[0-9]{5}$/)}>Submit</button>
      </form>
    </div>
  )
}

export default Weather