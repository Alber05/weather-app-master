import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'

export function HighLightsCard({ title, value, unit, deg }) {
  const getWindDirection = (deg) => {
    switch (true) {
      case (deg >= 0 && deg < 22.5) || (deg >= 337.5 && deg <= 360):
        return 'Norte'
      case deg >= 22.5 && deg < 67.5:
        return 'Noreste'
      case deg >= 67.5 && deg < 112.5:
        return 'Este'
      case deg >= 112.5 && deg < 157.5:
        return 'Sureste'
      case deg >= 157.5 && deg < 202.5:
        return 'Sur'
      case deg >= 202.5 && deg < 247.5:
        return 'Suroeste'
      case deg >= 247.5 && deg < 292.5:
        return 'Oeste'
      case deg >= 292.5 && deg < 337.5:
        return 'Noroeste'
      default:
        return 'Desconocido'
    }
  }

  const windDirection = getWindDirection(deg)

  const rotateDirection = {
    norte: 'rotate-[0deg]',
    noreste: 'rotate-[45deg]',
    este: 'rotate-[90deg]',
    sureste: 'rotate-[135deg]',
    sur: 'rotate-[180deg]',
    suroeste: 'rotate-[225deg]',
    oeste: 'rotate-[270deg]',
    noroeste: 'rotate-[315deg]'
  }[getWindDirection(deg).toLowerCase()]

  return (
    <article className='highlight bg-[#1E213A] h-full w-full col-span-8 lg:col-span-4 p-6 flex flex-col  rounded-md overflow-hidden'>
      <h3 className='text-base font-medium'>{title}</h3>
      <p className='text-[64px] font-medium'>
        {value}
        <span className='h-9 text-[36px]'>{unit}</span>
      </p>
      {title === 'Humedad' && (
        <div>
          <label htmlFor='humidity' className='flex justify-between'>
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </label>
          <progress
            id='humidity'
            max='100'
            value={value}
            className='w-full rounded-xl overflow-hidden h-2'
          >
            {value}%
          </progress>
        </div>
      )}
      {title === 'Viento' && (
        <p className='h-full flex items-center justify-center gap-2'>
          {' '}
          <FontAwesomeIcon icon={faAnglesUp} className={rotateDirection} />
          {windDirection}
        </p>
      )}
    </article>
  )
}

HighLightsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  deg: PropTypes.oneOfType([PropTypes.number, PropTypes.undefined])
}
