// import './WeatherView.css'
import WeatherIcon from 'react-weathericons';
import 'weather-icons/css/weather-icons.css';
import { iconMapping } from './iconMapping';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function WeatherView() {
  const { weather: data, status, error } = useSelector(state => state.weather)
  console.log('WeatherView', data, status, error)

  if (status !== 'succeeded' || !data) {
    return null
  }

  // If cod is not 200 we have an error
  let showWeather
  if (data.cod === 200) {
    showWeather = 'open'
  } else if (data.message) {
    showWeather = 'error'
  } else {
    showWeather = 'none'
  }

  const { weather, main, name, message } = data

  return (
    <div
      className='WeatherView bg-sky-50 flex flex-col items-center justify-center text-center p-6 m-6 shadow-lg'
    >
      
      {/* show this when we have data */}
      {showWeather === 'open' ? ( 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {/* Wrap the icon in a motion.div and animate */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <WeatherIcon 
              className="weather-icon text-5xl text-slate-700 mb-2"
              // Get the openweathermap icon and map it to weather icons
              name={iconMapping[weather[0].icon]} 
            />
          </motion.div>

          {/* Animate the temp */}
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // Notice we're using Tailwind along with Framer Motion!
            className='text-5xl font-semibold text-slate-700 mb-3 ml-5'
          >{Math.round(main.temp)}&deg;
          </motion.h1>

          {/* Animate the description */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-lg text-gray-600 capitalize mb-1'>
            {weather[0].description}
          </motion.p>

          {/* Animate the location */}
          <motion.small
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-gray-600'
          >
            {name}
          </motion.small>
        </motion.div>
      ) : (
        <p
          key="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-red-500 font-semibold'
        >Error {message}</p>)
      }
    </div>
  )
}

export default WeatherView
