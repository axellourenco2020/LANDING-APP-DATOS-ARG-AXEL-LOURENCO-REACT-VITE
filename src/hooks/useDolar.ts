import { useEffect, useState } from 'react'
import { type DolarResults } from '../types'

export const UseDolar = () => {
  const [dolar, setDolar] = useState<DolarResults[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://www.dolarsi.com/api/api.php?type=dolar')
      .then(async (res) => await res.json())
      .then((data) => {
        setDolar(data)
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
    dolar,
    loading,
    error
  }
}
