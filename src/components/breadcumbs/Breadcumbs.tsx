import lineImg from '../../assets/planes/line.svg'
import './breadcumbs.scss'

function Breadcumbs({active}: {active: number}) {
  return (
    <section className='breadcumbs'>
      <div className={`${active === 1 ? 'breadcumbs__enabled' : 'breadcumbs__disabled'}`}>
        <span>1</span>
        <p>Planes y coberturas</p>
      </div>
      <img src={lineImg} alt="Lines" /> 
      <div className={`${active === 2 ? 'breadcumbs__enabled' : 'breadcumbs__disabled'}`}>
        <span>2</span>
        <p>Resumen</p>
      </div>
    </section>
  )
}

export default Breadcumbs