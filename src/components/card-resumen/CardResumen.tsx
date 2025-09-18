import iconFam from '../../assets/resumen/iconFam.svg'
import type { IResumePlan } from '../../interfaces/plans.interface';
import type { IUserForm } from '../../interfaces/user.interface';
import './cardResumen.scss'

interface CardResumenProps {
  userName: string;
  userData: IUserForm;
  userPlan: IResumePlan;
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
          <p>DNI: <span>{userData.docNumber}</span></p>
          <p>Celular: <span>{userData.cellphone}</span></p>
        </section>
        <section>
          <h3>Plan elegido</h3>
          <p>{userPlan.name}</p>
          <p>Costo del Plan: <span>${userPlan.price} al mes</span></p>
        </section>
      </div>
    </div>
  )
}

export default CardResumen