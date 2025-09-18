import { CircleChevronLeft } from 'lucide-react'
import lineImg from '../../assets/planes/line.svg'
import './breadcumbs.scss'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Range from '../range/Range';

function Breadcumbs({active}: {active: number}) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const handleBack = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/');
  } 
  return (
    <section className='breadcumbs'>
      {active === 1 &&
      <>
      <span className='breadcumbs__back' onClick={handleBack}>
        <CircleChevronLeft width={24} height={24} color='#A9AFD9'/>
        <p>Paso 1 de 2</p>
        <Range min={0} max={2} step={1}/>
      </span>
      <div className='breadcumbs__divider'></div>
      </>
      }
      <div className='breadcumbs__dots'>
        <div className={`${active === 1 ? 'breadcumbs__enabled' : 'breadcumbs__disabled'}`}>
          <span>1</span>
          <p>Planes y coberturas</p>
        </div>
        <img src={lineImg} alt="Lines" /> 
        <div className={`${active === 2 ? 'breadcumbs__enabled' : 'breadcumbs__disabled'}`}>
          <span>2</span>
          <p>Resumen</p>
        </div>
      </div>
    </section>
  )
}

export default Breadcumbs