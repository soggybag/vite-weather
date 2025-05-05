import { useState } from "react"
import { motion } from "framer-motion"
import { fetchWeather } from "../redux/weatherSlice"
import { useDispatch } from "react-redux"
// import './Weather.css'

function Weather() {
  const [zip, setZip] = useState('90210')
  const dispatch = useDispatch()

  return (
    <div className="Weather">
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(fetchWeather(zip))
        }}
      >
        <motion.input 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="px-2 py-1 border-1 rounded-l bg-blue-50"
          value={zip}
          // Use a pattern to conform to a zip code 
          pattern="[0-9]{5}"
          onChange={(e) => setZip(e.target.value)}
        />
        {/* Disable this button with the zip does not 
            conform to a zip code */}
        <motion.button 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}

          className="px-2 ml-1 border-1 rounded-r bg-blue-200"
          disabled={!zip.match(/^[0-9]{5}$/)}>
            Submit
        </motion.button>
      </form>
    </div>
  )
}

export default Weather