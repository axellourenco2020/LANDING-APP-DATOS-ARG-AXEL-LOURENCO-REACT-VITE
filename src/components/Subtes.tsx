import { type Subtes, type Subte } from '../types'
import { LineaAIcon, LineaBIcon, LineaCIcon, LineaDIcon, LineaEIcon, LineaHIcon, LineaPIcon, LineaUIcon } from './SubteIcons'

interface Props {
  subtes: Subtes[]
  error: boolean | null
}

const getIcon = (name: string) => {
  if (name === 'A') {
    return <LineaAIcon />
  }
  if (name === 'B') {
    return <LineaBIcon />
  }
  if (name === 'C') {
    return <LineaCIcon />
  }
  if (name === 'D') {
    return <LineaDIcon />
  }
  if (name === 'E') {
    return <LineaEIcon />
  }
  if (name === 'H') {
    return <LineaHIcon />
  }
  if (name === 'P') {
    return <LineaPIcon />
  }
  if (name === 'U') {
    return <LineaUIcon />
  }
  return null
}

const SubteItem = ({ subte }: { subte: Subte }) => {
  const icon = getIcon(subte.nombre)
  return (
    <div className="subte-item">
      <div className={`subte ${subte.nombre}`}>{icon}</div>
      <p>{subte.estado}</p>
    </div>
  )
}

export default function SubtesComponent({ subtes, error }: Props) {
  if (error as boolean) {
    return (
      <div className='subtes'>
        <p>Error al obtener los datos del Subte.</p>
      </div>
    )
  }
  const today = new Date()
  const lastUpdate = new Date(subtes[0].actualizado)
  const msDiff = lastUpdate.getTime() - today.getTime()
  const dayDiff = Math.round(msDiff / 60000)

  const rtf = new Intl.RelativeTimeFormat('es-AR', { numeric: 'auto' })
  return (
    <div className="subtes">
      <a title='Informacion Subtes' href="https://buenosaires.gob.ar/subte" target="_blank" rel="noopener noreferrer" >
        {
          subtes[0].subte.map(subte => (
            <SubteItem key={subte.nombre} subte={subte} />
          ))
        }
      </a>
      <p>Actualizado {rtf.format(dayDiff, 'minutes')}</p>
    </div>
  )
}
