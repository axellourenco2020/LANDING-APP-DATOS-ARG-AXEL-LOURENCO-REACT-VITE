import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HolidayProvider } from './context/holidayContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HolidayProvider>
    <App />
  </HolidayProvider>
)
