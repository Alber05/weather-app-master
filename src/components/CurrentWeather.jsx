import { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext'
import { useDate } from '../hooks/useDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import cloudBg from '../assets/Cloud-background.png'
import Browser from './Browser'
import WeatherIcon from './WeatherIcon'

function CurrentWeather() {
  // Estado local para mostrar u ocultar el menú de búsqueda
  const [showMenu, setShowMenu] = useState(false)

  // Obtener datos del contexto de la API y la función de geolocalización
  const { currentWeather, handleGeolocationPermission, degreeUnits } =
    useContext(ApiContext)
  const { dt } = currentWeather

  // Obtener datos de fecha a partir de un timestamp
  const { currentDayName, currentNumberOfDay, currentMonth } = useDate(dt)

  return (
    <div className='current relative col-span-6 lg:col-span-2 bg-[#1E213A] py-8 overflow-x-hidden min-h-screen lg:h-screen'>
      <div className='w-[90%] mx-auto'>
        <div className='h-full flex justify-between items-center'>
          {/* Botón para mostrar/ocultar el menú de búsqueda */}
          <button
            className='search w-[161px] drop-shadow-md h-10 text-[#E7E7EB] bg-[#6E707A]  z-10'
            onClick={() => setShowMenu(!showMenu)}
          >
            Buscar ciudad
          </button>
          {/* Botón para obtener la ubicación actual */}
          <button className='w-10 h-10 bg-[#6E707A] rounded-full flex items-center justify-center cursor-pointer  z-10'>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              style={{ color: '#ffffff' }}
              className='h-[22px] w-[22px]'
              onClick={handleGeolocationPermission}
            />
          </button>
        </div>
        {/* Fondo de nube */}
        <div className='absolute w-[150%] max-h-[326px] top-[100px] -left-[111px] opacity-10 flex items-center'>
          <img
            src={cloudBg}
            alt='Cloud background photo'
            className='w-full h-full object-fill'
          />
        </div>
        <div className='flex items-center justify-center h-[326px]'>
          {/* Icono de clima */}
          <WeatherIcon currentWeather={currentWeather} />
        </div>
        <div className='text-center'>
          {/* Temperatura actual */}
          <h2 className='text-[90px] font-medium text-[#E7E7EB]'>
            {degreeUnits.celsius
              ? currentWeather?.main?.temp.toFixed(0)
              : ((currentWeather?.main?.temp * 9) / 5 + 32).toFixed(0)}
            <span className='text-5xl font-light text-[#A09FB1] ml-1'>
              {degreeUnits.celsius ? 'ºC' : 'ºF'}
            </span>
          </h2>
          {/* Descripción del clima */}
          <h3 className='text-4xl text-[#A09FB1] font-semibold'>
            {currentWeather?.weather[0]?.description}
          </h3>
        </div>
        {/* Fecha actual */}
        <p className='my-14 text-[#88869D]  flex items-center justify-center gap-2'>
          <span>Hoy</span>·
          <span>
            {currentDayName}, {currentNumberOfDay} {currentMonth}
          </span>
        </p>
        {/* Nombre de la ubicación actual */}
        <p className='text-lg font-semibold text-[#88869D] flex items-center  justify-center gap-2'>
          <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' />
          {currentWeather.name}
        </p>
      </div>
      {/* Componente de búsqueda */}
      <Browser showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default CurrentWeather
