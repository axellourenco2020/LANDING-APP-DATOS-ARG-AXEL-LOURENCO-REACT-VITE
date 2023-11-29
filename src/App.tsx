import './App.css'
import { type UtilDate } from './types'
import WeatherItem from './components/WeatherItem'
import Holiday from './components/Holiday'
import DolarComponent from './components/Dolar'
import UsefulDates from './components/UsefulDates'
import { UseWeather } from './hooks/useWeather'
import { UseHoliday } from './hooks/useHoliday'
import { UseDolar } from './hooks/useDolar'
import Footer from './components/Footer'
import { UseSubte } from './hooks/useSubte'
import SubtesComponent from './components/Subtes'
import { useContext } from 'react'
import { HolidayContext } from './context/holidayContext'

const INITIAL_USEFUL_DATES = [
  {
    name: 'Elecciones PASO',
    date: new Date('2023-08-13')
  },
  {
    name: 'Elecciones Generales',
    date: new Date('2023-10-22')
  }
]

function App() {
  const { weather, loading: weatherLoading, error: weatherError } = UseWeather()
  const { holidays, loading: holidayLoading, error: holidayError } = UseHoliday()
  const { dolar, loading: dolarLoading, error: dolarError } = UseDolar()
  const { subtes, loading: subteLoading, error: subteError } = UseSubte()
  const usefulDates: UtilDate[] = INITIAL_USEFUL_DATES
  const today = new Date()
  const { isHoliday } = useContext(HolidayContext)

  return (
    <div className={`App ${isHoliday != null ? isHoliday.id : ''}`}>

      <h1>HOY EN ARGENTINA🧉</h1>
      {isHoliday != null && (
        <div className='isHoliday'>
          <img src='/arg.webp' alt='Argentina' />
          <h2>{isHoliday.motivo}</h2>
          <img src='/arg.webp' alt='Argentina' />
        </div>
      )}

      {!weatherLoading && (weather.length > 0 || weatherError as boolean)
        ? <WeatherItem weather={weather[0]} error={weatherError} />
        : <p>Cargando...</p>
      }

      {!subteLoading && (subtes.length > 0 || subteError as boolean)
        ? <SubtesComponent subtes={subtes} error={subteError} />
        : <p>Cargando...</p>
      }

      {!holidayLoading && (holidays.length > 0 || holidayError as boolean)
        ? <Holiday today={today} holidays={holidays} error={holidayError} />
        : <p>Cargando...</p>
      }

      {!dolarLoading && (dolar.length > 0 || dolarError as boolean)
        ? <DolarComponent dolar={dolar} error={dolarError} />
        : <p>Cargando...</p>
      }

      <UsefulDates today={today} usefulDates={usefulDates} />
      <Footer />
    </div>
  )
}

export default App
