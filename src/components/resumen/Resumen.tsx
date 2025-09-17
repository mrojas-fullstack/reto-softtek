import { CircleChevronLeft } from 'lucide-react'
import Breadcumbs from '../breadcumbs/Breadcumbs'
import CardResumen from '../card-resumen/CardResumen'
import './resumen.scss'

function Resumen() {
  return (
    <div className='resumen'>
      <Breadcumbs active={2} />
      <div className='resumen__content'>
        <span className='resumen__content--back'><CircleChevronLeft /> Volver</span>
        <div className='resumen__content--wrapper'>
          <div className='resumen__content--text'>
            <h1>Resumen del seguro</h1>
          </div>
          <div className='resumen__content--card'>
            <CardResumen 
              userName={'Rocio Miranda Díaz'} 
              userData={{dni:'45697565', celular:'9887654321'}} 
              userPlan={{plan:'Plan en Casa y Clínica', cost:'$99 al mes'}} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumen