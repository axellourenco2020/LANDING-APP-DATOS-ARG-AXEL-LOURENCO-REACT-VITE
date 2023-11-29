import { createContext, useState } from 'react'
import { type HolidaysResults } from '../types'

interface HolidayContextProps {
  isHoliday: HolidaysResults | null
  setIsHoliday: (isHoliday: HolidaysResults | null) => void
}

export const HolidayContext = createContext<HolidayContextProps>({
  isHoliday: null,
  setIsHoliday: () => { }
})

export function HolidayProvider({ children }: { children: React.ReactNode }) {
  const [isHoliday, setIsHoliday] = useState<HolidaysResults | null>(null)

  return (
    <HolidayContext.Provider value={{
      isHoliday,
      setIsHoliday
    }}>
      {children}
    </ HolidayContext.Provider >
  )
}
