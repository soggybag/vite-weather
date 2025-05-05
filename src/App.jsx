import Weather from './components/Weather'
import WeatherView from './components/WeatherView'
import WeatherView2 from './components/WeatherView2'
import WeatherStatus from './components/WeatherStatus'
// import './App.css'

function App() {
  return (
    <div className='h-screen bg-blue-100 p-4 flex items-center justify-center flex-col'>
      <WeatherView />
      {/* <WeatherView2 /> */}
      <Weather />
      <WeatherStatus />
    </div>
  )
}

export default App
