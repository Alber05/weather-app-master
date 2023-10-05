import { useState, useEffect } from 'react'
import { ApiContext } from './ApiContext'
import { FetchCurrentWeather } from '../api/FetchCurrentWeather'
import PropTypes from 'prop-types'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

function ApiContextProvider({ children }) {
  // Estado para el indicador de carga
  const [isLoading, setIsLoading] = useState(true)

  // Estado para la ubicación actual de la ciudad
  const [currentCity, setCurrentCity] = useState(null)

  // Estado para los datos meteorológicos actuales
  const [currentWeather, setCurrentWeather] = useState([])

  // Estado para el pronóstico del tiempo
  const [forecast, setForecast] = useState([])

  // Estado para el permiso de geolocalización
  const [geolocationPermission, setGeolocationPermission] = useState('prompt')

  // Estado para controlar
  const [degreeUnits, setDegreeUnits] = useState({
    celsius: true,
    fahrenheit: false
  })

  // Función para obtener los datos meteorológicos
  const fetchWeatherData = async (coordinates) => {
    await FetchCurrentWeather(coordinates, setCurrentWeather, WEATHER_URL)
    await FetchCurrentWeather(coordinates, setForecast, FORECAST_URL)
  }

  // Función para establecer las coordenadas de Madrid
  const setMadridCoordinates = async () => {
    const madridCoordinates = {
      lat: 40.4165,
      lon: -3.70256
    }
    setCurrentCity(madridCoordinates)
    await fetchWeatherData(madridCoordinates)
    setIsLoading(false)
  }

  // Efecto para obtener la ubicación inicial
  useEffect(() => {
    setIsLoading(true)
    const setInitialCity = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const coordinates = {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            }
            setCurrentCity(coordinates)
            await fetchWeatherData(coordinates)
            setIsLoading(false)
          },
          async (error) => {
            console.error('Error obtaining geolocation:', error)
            await setMadridCoordinates()
          }
        )
      } catch (error) {
        console.error('Error obtaining geolocation:', error)
        await setMadridCoordinates()
        setIsLoading(false)
      }
    }
    setInitialCity()
  }, [geolocationPermission])

  const handleGeolocationPermission = () => {
    if ('geolocation' in navigator) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          // Función para manejar el cambio de permiso
          const handleChange = () => {
            setGeolocationPermission(permissionStatus.state)
          }
          // Asignar la función de manejo de cambios al evento onchange
          permissionStatus.onchange = handleChange
          // Llamar a la función de manejo de cambios inicialmente
          handleChange()
        })
    } else {
      console.log('El navegador no admite la API de geolocalización.')
    }
  }

  // Efecto para manejar cambios en el permiso de geolocalización
  useEffect(() => {
    handleGeolocationPermission()
  }, [geolocationPermission])

  // Renderiza el componente de contexto con los valores y provee los hijos
  return (
    <ApiContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        currentWeather,
        setCurrentWeather,
        forecast,
        isLoading,
        fetchWeatherData,
        handleGeolocationPermission,
        degreeUnits,
        setDegreeUnits
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

// PropTypes para validar las props
ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ApiContextProvider
