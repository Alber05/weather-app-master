import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import cloudBg from '../assets/Cloud-background.png'
import ejemplo from '../assets/HeavyRain.png'
import Browser from './Browser'

const handleGeolocation = async () => {
  try {
    // Solicita permisos de geolocalización incluso si ya se han bloqueado previamente.
    const position = await navigator.permissions.query({
      name: 'geolocation'
    })

    if (
      position.state === 'granted' ||
      position.state === 'prompt' ||
      position.state === 'denied'
    ) {
      // Los permisos están otorgados o en modo de solicitud, puedes obtener la ubicación.
      navigator.geolocation.getCurrentPosition((position) => {
        const latitud = position.coords.latitude
        const longitud = position.coords.longitude
        console.log(latitud, longitud)
      })
    } else {
      console.log('El usuario ha bloqueado la solicitud de geolocalización.')
    }
  } catch (error) {
    console.error('Error al solicitar permisos de geolocalización:', error)
  }
}

function CurrentWeather() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='current relative col-span-6 md:col-span-2 bg-[#1E213A] min-h-screen py-8 overflow-hidden'>
      <div className='w-[90%] mx-auto'>
        <header className='h-full flex justify-between items-center'>
          <button
            className='search w-[161px] drop-shadow-md h-10 text-[#E7E7EB] bg-[#6E707A]  z-10'
            onClick={() => setShowMenu(!showMenu)}
          >
            Search for places
          </button>
          <button
            className='w-10 h-10 bg-[#6E707A] rounded-full flex items-center justify-center cursor-pointer  z-10'
            onClick={handleGeolocation}
          >
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              style={{ color: '#ffffff' }}
              className='h-[22px] w-[22px]'
            />
          </button>
        </header>
        <div className='absolute w-[150%] max-h-[326px] top-[100px] -left-[111px] opacity-10 flex items-center'>
          <img
            src={cloudBg}
            alt='Cloud background photo'
            className='w-full h-full object-fill'
          />
        </div>
        <div className='flex items-center justify-center h-[326px]'>
          <img src={ejemplo} alt='Current wheater icon' className='' />
        </div>
        <div className='text-center'>
          <h2 className='text-[144px] font-medium text-[#E7E7EB]'>
            15{' '}
            <span className='text-5xl font-light text-[#A09FB1] -ml-8'>ºC</span>
          </h2>
          <h3 className='text-4xl text-[#A09FB1] font-semibold'>Shower</h3>
        </div>
        <p className='my-14 text-[#88869D]  flex items-center justify-center gap-2'>
          <span>Today</span>·<span>Fri, 5 Jun</span>
        </p>
        <p className='text-lg font-semibold text-[#88869D] flex items-center  justify-center gap-2'>
          <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' />
          Helsinki
        </p>
      </div>
      <Browser showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default CurrentWeather
