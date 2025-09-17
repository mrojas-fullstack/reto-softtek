import iconFam from '../../assets/resumen/iconFam.svg'
import './cardResumen.scss'

interface CardResumenProps {
  userName: any;
  userData: any;
  userPlan: any;
}

function CardResumen( {userName, userData, userPlan}: CardResumenProps ) {
  return (
    <div className='card-resumen'>
      <div className='card-resumen__title'>
        <p>Precios calculados para:</p>
        <div>
          <img src={iconFam} alt="Icon"/>
          <h2>{userName}</h2>
        </div>
      </div>
      <div className='card-resumen__divider'></div>
      <div className='card-resumen__content'>
        <section>
          <h3>Responsable de pago</h3>
          <p>DNI: <span>{userData.dni}</span></p>
          <p>Celular: <span>{userData.celular}</span></p>
        </section>
        <section>
          <h3>Plan elegido</h3>
          <p>{userPlan.plan}</p>
          <p>Costo del Plan: <span>{userPlan.cost}</span></p>
        </section>
      </div>
    </div>
  )
}

export default CardResumen