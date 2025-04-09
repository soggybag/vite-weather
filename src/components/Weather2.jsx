///////////////////////////////////////////////////////////////
// Use this component to experiment with HOCs
// High Order Components
// Enable it in App.jsx
///////////////////////////////////////////////////////////////

function WeatherData() {
  return <h1>Weather Data</h1>
}

function LoadingSpinner() {
  return <h1>Loading...</h1>
}

function Weather2({ isLoaded }) {
  return isLoaded ? <WeatherData /> : <LoadingSpinner />;
}

export default Weather2