import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export function DegreesControllerButtons() {
  // Obtener el estado y la función para actualizar el estado desde el contexto.
  const { degreeUnits, setDegreeUnits } = useContext(ApiContext)

  // Función para cambiar la unidad de temperatura (Celsius o Fahrenheit).
  const handleUnitChange = (unit) => {
    // Actualizar el estado con la nueva unidad seleccionada.
    setDegreeUnits({
      celsius: unit === 'celsius',
      fahrenheit: unit === 'fahrenheit'
    })
  }

  // Clases CSS para los botones activados y desactivados.
  const activatedButtonClass = 'bg-[#E7E7EB] text-[#100E1D]'
  const disabledButtonClass = 'bg-[#585676] text-[#E7E7EB]'

  return (
    <div className='flex items-center justify-end gap-4'>
      {/* Botón para Celsius */}
      <button
        className={`rounded-full flex items-center justify-center w-[40px] h-[40px] font-bold ${
          degreeUnits.celsius ? activatedButtonClass : disabledButtonClass
        }`}
        onClick={() => handleUnitChange('celsius')}
      >
        ºC
      </button>

      {/* Botón para Fahrenheit */}
      <button
        className={`rounded-full flex items-center justify-center w-[40px] h-[40px] font-bold ${
          degreeUnits.fahrenheit ? activatedButtonClass : disabledButtonClass
        }`}
        onClick={() => handleUnitChange('fahrenheit')}
      >
        ºF
      </button>
    </div>
  )
}
