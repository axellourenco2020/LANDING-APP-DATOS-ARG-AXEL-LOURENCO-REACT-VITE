import { useEffect, useState } from 'react'
import { type Daily } from '../types'

const API_KEY: string = import.meta.env.VITE_API_KEY

export const UseWeather = () => {
  const [weather, setWeather] = useState<Daily[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=buenosaires&timesteps=daily&apikey=${API_KEY}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setWeather(data.timelines.daily)
      }).catch((err) => {
        setError(err)
        throw new Error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    weather,
    loading,
    error
  }
}
