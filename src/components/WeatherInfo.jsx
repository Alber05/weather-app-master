import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import { ForecastCard } from './ForecastCard'
import { HighLightsCard } from './HighLightsCard'
import { DegreesControllerButtons } from './degreesControllerButtons'

function WeatherInfo() {
  const { currentWeather, forecast } = useContext(ApiContext)

  // Filtrar el pronóstico diario seleccionando cada 8º elemento (cada día)
  const dailyForecast = forecast.list.filter((_, id) => id % 8 === 0)

  console.log(currentWeather)

  return (
    <div className='info col-span-6 lg:col-span-4 bg-[#100E1D] min-h-screen lg:h-screen lg:overflow-y-auto '>
      <DegreesControllerButtons />
      <div className='relative w-[80%] mx-auto flex flex-col justify-center items min-h-[calc(screen-72px)] '>
        <section className='w-full grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 place-items-center py-12'>
          {dailyForecast.map((dailyForecast) => (
            <ForecastCard key={dailyForecast.dt} forecast={dailyForecast} />
          ))}
        </section>
        <h3 className='text-[#E7E7EB] font-bold text-2xl pt-4 pb-0'>
          Lo más destacado de hoy
        </h3>
        <section className='grid grid-cols-8 gap-4 place-items-center py-2 pb-8 text-[#E7E7EB] text-center rounded-md overflow-hidden'>
          {/* Componentes de información destacada */}
          <HighLightsCard
            title='Viento'
            value={currentWeather?.wind?.speed.toFixed(0)}
            unit='km/h'
            deg={currentWeather?.wind?.deg}
          />
          <HighLightsCard
            title='Humedad'
            value={currentWeather?.main?.humidity}
            unit='%'
          />
          <HighLightsCard
            title='Visibilidad'
            value={(currentWeather?.visibility / 1000).toFixed(1)}
            unit='km'
          />
          <HighLightsCard
            title='Presión del aire'
            value={currentWeather?.main?.pressure}
            unit='mb'
          />
        </section>
      </div>
    </div>
  )
}

export default WeatherInfo
