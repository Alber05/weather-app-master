import { useState, useEffect } from 'react'

export function useDate(date) {
  const [formattedDate, setFormattedDate] = useState(date)

  useEffect(() => {
    const currentDate = new Date(date * 1000)

    const daysOfWeek = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ]
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ]
    const currentDayName = daysOfWeek[currentDate.getDay()]
    const currentNumberOfDay = currentDate.getDate()
    const currentMonth = months[currentDate.getMonth()]

    const formattedDate = {
      currentDayName,
      currentNumberOfDay,
      currentMonth
    }

    setFormattedDate(formattedDate)
  }, [date])

  return formattedDate
}
