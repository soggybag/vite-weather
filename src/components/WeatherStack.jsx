import { useEffect, useState } from "react";
import { iconMapping } from "./iconMapping";
import WeatherIcon from 'react-weathericons';
import 'weather-icons/css/weather-icons.css';
// import './WeatherStack.css'

/////////////////////////////////////////////
// Stack View 
/////////////////////////////////////////////
function StackView({ data, fade }) {  
  console.log(data)
  return (
    <div className={`View ${fade > 0 ? 'fade' : ''}`}>
      <WeatherIcon 
        className="weather-icon"
        // Get the openweathermap icon and map it to weather icons
        name={iconMapping[data.weather[0].icon]} 
      />
      <h1 className="">
        {`${data.main.temp}`}
      </h1>
      <div>{data.weather[0].description}</div>
    </div>
  )
}

// Set fade time 
const fadeTime = 1000;

function WeatherStack() { 
  const [zip, setZip] = useState('90210')
  const [views, setViews] = useState([])

  /////////////////////////////////////////////////////////////
  // Handle Weather with an async function
  /////////////////////////////////////////////////////////////
  async function handleForm() {
    const apikey = import.meta.env.VITE_API_KEY
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`)
    const data = await res.json()
    console.log(data)
    setViews(prev => [data, ...prev])
  } 
  /////////////////////////////////////////////////////////////

  useEffect(() => {
    // There is nothing to 
    if (views.length < 2) {
      return
    }

    const timeout = setTimeout(() => {
      setViews(prev => prev.slice(0, -1));
    }, fadeTime)

    return () => clearTimeout(timeout);
  }, [views.length])

  return (
    <div 
      style={{'--fade-time': `${fadeTime}ms`}}
      className="WeatherStack"
    >
      <div className="views">
        {views.map((data, i) => <StackView key={data} data={data} fade={i} />)}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleForm()
        }}
      >
        <input 
          value={zip}
          pattern="[0-9]{5}"
          onChange={(e) => setZip(e.target.value)}
        />
        <button disabled={!zip.match(/^[0-9]{5}$/)}>Submit</button>
      </form>
    </div>
  )

}

export default WeatherStack

