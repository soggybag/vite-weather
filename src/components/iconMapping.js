///////////////////////////////////////////////////////////////
// This component displays weather data or nothing
///////////////////////////////////////////////////////////////

// Map the OpenWeatherMap icons to WeatherIcon names. 
// might be good to move this into another file and import!
// The icons have day (d) and night (n) versions.
export const iconMapping = {
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