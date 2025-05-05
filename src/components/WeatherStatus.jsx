// import './WeatherView.css'
import { useSelector } from 'react-redux';

function WeatherStatus() {
  const { status, error } = useSelector(state => state.weather)
  
  if (status === "idle") {
    return null
  }

  return (
    <div className='WeatherStatus'>
      <small>status: {status} {error ? `Error: ${error}` : ''}</small>
    </div>
  )
}

export default WeatherStatus
