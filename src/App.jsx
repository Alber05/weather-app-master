import React, { useContext } from 'react' // Asegúrate de importar React
import CurrentWeather from './components/CurrentWeather'
import WeatherInfo from './components/WeatherInfo'
import Loader from './components/Loader' // Asumo que tienes un componente Loader
import { ApiContext } from './context/ApiContext'

function App() {
  const { isLoading } = useContext(ApiContext)

  return (
    <>
      {isLoading ? (
        <Loader /> // Muestra el Loader si isLoading es true
      ) : (
        <div className='grid grid-cols-6 font-raleway min-h-screen lg:min-h-screen'>
          <CurrentWeather />
          <WeatherInfo />
        </div>
      )}
    </>
  )
}

export default App
