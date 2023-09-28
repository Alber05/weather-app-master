import { useEffect } from 'react'

import CurrentWeather from './components/CurrentWeather'
import WeatherInfo from './components/WeatherInfo'

function App() {
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitud = position.coords.latitude
        const longitud = position.coords.longitude
        // Aquí puedes usar latitud y longitud en tu llamada a la API.
        console.log(latitud, longitud)
      })
    } else {
      console.log('La geolocalización no está disponible en este dispositivo.')
    }
  }, [])

  return (
    <div className='grid grid-cols-6 font-raleway min-h-screen '>
      <CurrentWeather />
      <WeatherInfo />
    </div>
  )
}

export default App
