import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export function DegreesControllerButtons() {
  const { degreeUnits, setDegreeUnits } = useContext(ApiContext)

  const handleUnitChange = (unit) => {
    setDegreeUnits({
      celsius: unit === 'celsius',
      fahrenheit: unit === 'fahrenheit'
    })
  }

  const buttonActivated = 'bg-[#E7E7EB] text-[#100E1D]'
  const buttonDisabled = 'bg-[#585676] text-[#E7E7EB]'

  return (
    <div className='flex items-center justify-end gap-4'>
      <button
        className={`rounded-full flex items-center justify-center w-[40px] h-[40px] font-bold ${
          degreeUnits.celsius ? buttonActivated : buttonDisabled
        }`}
        onClick={() => handleUnitChange('celsius')}
      >
        ºC
      </button>
      <button
        className={`rounded-full flex items-center justify-center w-[40px] h-[40px] font-bold ${
          degreeUnits.fahrenheit ? buttonActivated : buttonDisabled
        }`}
        onClick={() => handleUnitChange('fahrenheit')}
      >
        ºF
      </button>
    </div>
  )
}
