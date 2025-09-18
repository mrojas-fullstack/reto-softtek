import { CircleChevronLeft } from 'lucide-react'
import Card from '../card/Card'
import { useEffect, useState } from 'react'
import { cards, cardsPlanesUser } from '../../utils/dataDummy'
import CardPlanes from '../card-planes/CardPlanes'
import Breadcumbs from '../breadcumbs/Breadcumbs'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import type { IPlanList, IPlans } from '../../interfaces/plans.interface'
import { plansApi } from '../../services/api'
import type { IUser } from '../../interfaces/user.interface'
import './planes.scss'
import { getAge } from '../../helpers/getAge'
import Slider from '../slider/Slider'

function Planes() {
  const [dataName, setDataName] = useState<IUser>();
  const [selectedOption, setSelectedOption] = useState<string>();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [plans, setPlans] = useState<IPlans>();
  const [plansFilter, setPlansFilter] = useState<IPlanList[]>([]);
  const edad = getAge(dataName?.birthDay ?? "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedDataName = localStorage.getItem('userName');
    if (storedDataName) {
      setDataName(JSON.parse(storedDataName));
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    plansApi
      .get("/")
      .then((res) => {
        setPlans(res.data);
        setLoading(false);
      })
      .catch(e =>{
        setLoading(false);
        console.log(e);
      })
  }, []);

  useEffect(() => {
    const dtPlans = plans?.list.filter((plan) => Number(edad) <= plan.age);
    if(dtPlans){
      setPlansFilter(dtPlans);
    }
  }, [plans]);

  const handleBack = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/');
  }  

  return (
    <div className='planes'>
      <Breadcumbs active={1} />
      <div className='planes__content'>
        <span className='planes__content--back' onClick={handleBack}><CircleChevronLeft /> Volver</span>
        <div className='planes__content--wrapper'>
          <div className='planes__content--text'>
            <h1>{dataName?.name} ¿Para quién deseas cotizar?</h1>
            <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          <div className='planes__content--cards'>
            {cards.map((card, index) => (
              <Card 
                key={index}
                idx={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </div>
        </div>
      </div>
      { Number(selectedOption) >= 0 && !loading &&
        <>
        <section className='planes__options'>
          {plansFilter?.length > 0 && plansFilter?.map((card, index) => (
            <CardPlanes 
              type={Number(selectedOption)}
              key={index}
              card={card}
              recomended={cardsPlanesUser[index]?.recomended}
              icon={cardsPlanesUser[index]?.icon}
            />
          ))}
        </section>
        <Slider slides={plansFilter} type={Number(selectedOption)}/>
        </>
      }
    </div>
  )
}

export default Planes