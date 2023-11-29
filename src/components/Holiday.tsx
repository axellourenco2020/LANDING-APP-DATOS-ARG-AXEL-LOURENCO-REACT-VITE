import { useContext, useEffect } from 'react'
import { type HolidaysResults } from '../types'
import { HolidayContext } from '../context/holidayContext'

interface Props {
  today: Date
  holidays: HolidaysResults[]
  error: boolean | null
}

export default function Holiday({ today, holidays, error }: Props) {
  const { setIsHoliday } = useContext(HolidayContext)

  if (error as boolean) {
    return (
      <div className='holiday'>
        <p>Error al obtener el siguiente feriado</p>
      </div>
    )
  }

  const nextHoliday = holidays.find((holiday) => (new Date(2023, holiday.mes - 1, holiday.dia)) > today ?? { ...holidays[0] })
  const nextHolidayDate = new Date(2023, nextHoliday?.mes as number - 1, nextHoliday?.dia)

  const msDiff = nextHolidayDate.getTime() - today.getTime()
  const dayDiff = Math.round(msDiff / 86400000)

  const rtf = new Intl.RelativeTimeFormat('es-AR', { numeric: 'auto' })

  useEffect(() => {
    const isHoliday = holidays.find((holiday) => {
      const holidayDate = new Date(2023, holiday.mes, holiday.dia)
      return (
        (
          holidayDate.getDate() === today.getDate() && holidayDate.getMonth() === today.getMonth() + 1
        ) ??
        { ...holidays[0] }
      )
    })
    if (isHoliday != null) {
      setIsHoliday(isHoliday)
    }
  }, [])

  return (
    <div className={`holiday ${nextHoliday?.id as string}`}>
      <p>El proximo feriado es {rtf.format(dayDiff, 'day')} :</p>
      <p>{nextHoliday?.motivo}</p>
    </div>
  )
}
