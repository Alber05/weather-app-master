// import { useState } from 'react'
import axios from 'axios'
const openWeatherKey = import.meta.env.VITE_OPEN_WEATHER_KEY

export async function FetchCurrentWeather(currentCity, setWeatherInfo, url) {
  const options = {
    method: 'GET',
    url,
    params: {
      lat: currentCity.lat,
      lon: currentCity.lon,
      appid: openWeatherKey,
      units: 'metric',
      lang: 'sp'
    }
  }

  try {
    const response = await axios.request(options)
    setWeatherInfo(response.data)
  } catch (error) {
    console.error(error)
  }
}
