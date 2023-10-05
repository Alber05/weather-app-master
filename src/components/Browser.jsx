/* eslint-disable react/jsx-curly-newline */
import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { ApiContext } from '../context/ApiContext'
import { FetchCitys } from '../api/fetchCitys'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Browser({ showMenu, setShowMenu }) {
  // Estado local para el valor de búsqueda de la ciudad y los resultados
  const [cityQuery, setCityQuery] = useState('')
  const [results, setResults] = useState([])

  const { fetchWeatherData } = useContext(ApiContext)

  // Manejar cambios en la entrada de búsqueda
  const handleQuery = (e) => {
    setCityQuery(e.target.value)
  }

  // Enviar la consulta de búsqueda
  const submitQuery = (e) => {
    e.preventDefault()
    FetchCitys(setResults, cityQuery)
    setCityQuery('')
  }

  return (
    <div
      className={`absolute w-full h-screen overflow-y-auto top-0 left-0 bg-[#1E213A] z-20 text-[#E7E7EB] py-4 ${
        showMenu ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300`}
    >
      <nav className='w-[90%] mx-auto'>
        <div className='w-full flex justify-end pb-4'>
          {/* Botón para cerrar el menú */}
          <FontAwesomeIcon
            icon={faXmark}
            className='cursor-pointer'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <form
          className='w-full flex justify-between pb-8'
          onSubmit={(e) => submitQuery(e)}
        >
          <div className='flex items-center gap-4 border w-[70%] p-2 overflow-hidden'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type='text'
              className='bg-[#1E213A] h-full w-full outline-none text-[#616475] text-base font-medium'
              placeholder='Buscar ciudad'
              value={cityQuery}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <button type='submit' value='' className='w-[20%] bg-[#3C47E9]'>
            Search
          </button>
        </form>
        <div className='results'>
          <ul>
            {results?.map((city) => (
              // Elementos de resultados de búsqueda
              <li
                className='border p-2 cursor-pointer'
                key={city.id}
                onClick={() => {
                  // Obtener datos meteorológicos para la ciudad seleccionada
                  fetchWeatherData({
                    lat: city.latitude,
                    lon: city.longitude
                  })
                  // Cerrar el menú después de seleccionar una ciudad
                  setShowMenu(!showMenu)
                }}
              >
                {city.name}, {city.region}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

Browser.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired
}

export default Browser
