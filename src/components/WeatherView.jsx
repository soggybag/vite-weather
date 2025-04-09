
import './WeatherView.css'

// npm install react-weathericons
import WeatherIcon from 'react-weathericons';
// Now we can use: <WeatherIcon name="day-sunny" />

///////////////////////////////////////////////////////////////
// This component displays weather data or nothing
///////////////////////////////////////////////////////////////

// Map the OpenWeatherMap icons to WeatherIcon names. 
// might be good to move this into another file and import!
// The icons have day (d) and night (n) versions.
const iconMapping = {
  '01d': 'day-sunny',
  '01n': 'night-clear',
  '02d': 'day-cloudy',
  '02n': 'night-alt-cloudy',
  '03d': 'cloud',
  '03n': 'cloud',
  '04d': 'cloudy',
  '04n': 'cloudy',
  '09d': 'showers',
  '09n': 'showers',
  '10d': 'rain',
  '10n': 'rain',
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'fog',
  '50n': 'fog'
};

function WeatherView({ main, name, weather, cod, message }) {
  // If cod is not 200 we have an error
  if (cod !== 200) {
    return <p>Error: {message}</p>
  }

  // Figure out the icon mapping!
  // console.log(weather[0].icon)
  // console.log(iconMapping[weather[0].icon])

  // Might be good to do some deconstruction here! 

  return (
    <div className="WeatherView">
      <WeatherIcon 
        className="weather-icon"
        name={iconMapping[weather[0].icon]} 
      />
      {/* Use the html entity for the ˚ here: &deg; */}
      <h1>{Math.round(main.temp)}&deg;</h1>
      {/* The decimal value isn't informing anyone except the 
          obsesive compulsives and scientists! */}
      <p className='description'>{weather[0].description}</p>
      <small>{name}</small>
    </div>
  )
}

export default WeatherView


