import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import { useDate } from '../hooks/useDate'
import PropTypes from 'prop-types'
import WeatherIcon from './WeatherIcon'

export function ForecastCard({ forecast }) {
  const { degreeUnits } = useContext(ApiContext)

  // Desestructura el objeto 'forecast' para obtener la fecha 'dt'
  const { dt } = forecast

  // Utiliza el hook 'useDate' para obtener el nombre del día y el número del día a partir de 'dt'
  const { currentDayName, currentNumberOfDay } = useDate(dt)

  return (
    <article className='w-[120px] h-[177px] bg-[#1E213A] flex flex-col justify-between items-center gap-2 py-2 rounded-md overflow-hidden'>
      {/* Título del día */}
      <h4 className='text-[19px] font-medium text-[#E7E7EB] h-1/5'>
        {currentDayName} {currentNumberOfDay}
      </h4>
      {/* Icono del clima */}
      <figure className='w-[55%] h-3/5 flex justify-center items-center'>
        <WeatherIcon currentWeather={forecast} />
      </figure>
      {/* Temperaturas máxima y mínima */}
      <p className='flex gap-4 text-base font-medium text-[#E7E7EB] h-1/5'>
        <span>
          {degreeUnits.celsius
            ? `${forecast.main.temp_max.toFixed(0)} ºC`
            : `${((forecast.main.temp_max * 9) / 5 + 32).toFixed(0)} ºF`}
        </span>
        <span>
          {degreeUnits.fahrenheit
            ? `${((forecast.main.temp_min * 9) / 5 + 32).toFixed(0)} ºF`
            : `${forecast.main.temp_min.toFixed(0)} ºC`}
        </span>
      </p>
    </article>
  )
}

ForecastCard.propTypes = {
  forecast: PropTypes.object.isRequired
}
