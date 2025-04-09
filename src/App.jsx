
import './App.css'
import Weather from './components/Weather'
import Weather2 from './components/Weather2'
import UserDashboard from './components/UserDashBoard'
import { useState } from 'react'
import Watcher from './components/Watcher'

import 'weather-icons/css/weather-icons.css';

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Weather />


      
      {/* <Weather2 isLoaded={false}/>

      { show && <UserDashboard userId={'EdamameBean'} /> }

      <button
        onClick={() => setShow(!show)}
      >{show ? 'Hide' : 'Show'}</button>

      <hr />
      <Watcher /> */}

    </>
  )
}

export default App
