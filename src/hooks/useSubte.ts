import { useEffect, useState } from 'react'
import { type Subtes } from '../types'

const APIKEY = import.meta.env.VITE_SUBTE_KEY as string

export const UseSubte = () => {
  const [subtes, setSubtes] = useState<Subtes[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  /* SCRAPPING WITH APIFY */
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.apify.com/v2/acts/mstephen190~vanilla-js-scraper/runs/last/dataset/items?token=${APIKEY}`, {
      method: 'GET'
    })
      .then(async (res) => await res.json())
      .then((data) => {
        setSubtes(data)
      })
      .catch((err) => {
        setError(err)
        throw new Error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  /* BUENOS AIRES API */
  /* useEffect(() => {
    setLoading(true)
    fetch('https://buenosaires.gob.ar/subtes', {
      method: 'GET'
    })
      .then(async (res) => await res.json())
      .then((data) => {
        const newSubtes = data.subtes.map((subte: SubteElementFromFetch) => ({
          nombre: subte.nombre,
          estado: subte.estado[0] === '\n\t\t' ? 'Normal' : 'Demorado',
          frecuencia: subte.frecuencia
        }))
        setSubtes(newSubtes)
      })
      .catch((err) => {
        setError(err)
        throw new Error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []) */

  return {
    subtes,
    loading,
    error
  }
}
