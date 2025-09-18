import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CircleChevronLeft } from 'lucide-react'
import Breadcumbs from '../breadcumbs/Breadcumbs'
import CardResumen from '../card-resumen/CardResumen'
import './resumen.scss'
import type { IUser, IUserForm } from '../../interfaces/user.interface';
import type { IResumePlan } from '../../interfaces/plans.interface';

function Resumen() {
  const [dataName, setDataName] = useState<IUser>();
  const [dataUser, setDataUser] = useState<IUserForm>();
  const [dataPlan, setDataPlan] = useState<IResumePlan>();
  const navigate = useNavigate();

  useEffect(() => {
    const storedDataName = localStorage.getItem('userName');
    const storedDataUser = localStorage.getItem('userData');
    const storedDataPlan = localStorage.getItem('userPlan');
    if (storedDataName && storedDataUser && storedDataPlan) {
      setDataName(JSON.parse(storedDataName));
      setDataUser(JSON.parse(storedDataUser));
      setDataPlan(JSON.parse(storedDataPlan));
    }
  }, []);
  return (
    <div className='resumen'>
      <Breadcumbs active={2} />
      <div className='resumen__content'>
        <span className='resumen__content--back' onClick={() => navigate('/planes')}><CircleChevronLeft /> Volver</span>
        <div className='resumen__content--wrapper'>
          <div className='resumen__content--text'>
            <h1>Resumen del seguro</h1>
          </div>
          <div className='resumen__content--card'>
            <CardResumen 
              userName={`${dataName?.name} ${dataName?.lastName}`} 
              userData={{
                docNumber: dataUser?.docNumber ?? '',
                cellphone: dataUser?.cellphone ?? ''
              }} 
              userPlan={{name: dataPlan?.name ?? '', price: dataPlan?.price ?? ''}} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumen