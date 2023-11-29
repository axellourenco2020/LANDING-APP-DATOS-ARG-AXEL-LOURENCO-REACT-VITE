import { useEffect, useState } from 'react'
import { type HolidaysResults } from '../types'

export const UseHoliday = () => {
  const [holidays, setHolidays] = useState<HolidaysResults[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://nolaborables.com.ar/api/v2/feriados/2023')
      .then(async (res) => await res.json())
      .then((data) => {
        setHolidays(data)
      })
      .catch((err) => {
        setError(err)
        throw new Error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    holidays,
    loading,
    error
  }
}
