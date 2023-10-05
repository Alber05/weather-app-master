import React from 'react'
import PropTypes from 'prop-types'
import Clear from '../assets/Clear.png'
import Hail from '../assets/Hail.png'
import HeavyCloud from '../assets/HeavyCloud.png'
import HeavyRain from '../assets/HeavyRain.png'
import LightCloud from '../assets/LightCloud.png'
import LightRain from '../assets/LightRain.png'
import Shower from '../assets/Shower.png'
import Sleet from '../assets/Sleet.png'
import Snow from '../assets/Snow.png'
import Thunderstorm from '../assets/Thunderstorm.png'

function WeatherIcon({ currentWeather }) {
  const getIcon = () => {
    switch (currentWeather?.weather[0]?.main) {
      case 'Clear':
        return Clear
      case 'Hail':
        return Hail
      case 'Heavy Cloud':
        return HeavyCloud
      case 'Heavy Rain':
        return HeavyRain
      case 'Clouds':
        return LightCloud
      case 'Rain':
        return LightRain
      case 'Shower':
        return Shower
      case 'Sleet':
        return Sleet
      case 'Snow ':
        return Snow
      case 'Thunderstorm':
        return Thunderstorm
      default:
        return Thunderstorm
    }
  }

  const iconSrc = getIcon()

  return (
    <>
      <img src={iconSrc} alt='Current weather icon' className='w-auto h-auto' />
    </>
  )
}

WeatherIcon.propTypes = {
  currentWeather: PropTypes.object.isRequired
}

export default WeatherIcon
