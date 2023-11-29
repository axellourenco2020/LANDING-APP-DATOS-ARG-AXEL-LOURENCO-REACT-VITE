import { type UtilDate } from '../types'

interface Props {
  usefulDates: UtilDate[]
  today: Date
}

export default function UsefulDates({ usefulDates, today }: Props) {
  const msDiff = usefulDates[0].date.getTime() - today.getTime()
  const dayDiff = Math.round(msDiff / 86400000)

  const rtf = new Intl.RelativeTimeFormat('es-AR', { numeric: 'auto' })

  return (
    <div className='useful-dates'>
      <p>{rtf.format(dayDiff, 'day')} </p>
      {usefulDates.map((usefulDate) => (
        <div key={usefulDate.name}>
          <p>{usefulDate.name}: {usefulDate.date.toLocaleDateString('es-AR', { timeZone: 'UTC' })}</p>
        </div>
      ))}
    </div>
  )
}
