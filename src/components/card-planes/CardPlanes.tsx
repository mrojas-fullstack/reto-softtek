import { useNavigate } from 'react-router-dom';
import './cardPlanes.scss'

interface CardPlanesProps {
  name: string,
  price: number,
  description: Array<string>,
}

interface Card{
  card: CardPlanesProps,
  recomended: boolean,
  icon: string,
  type?: number,
}

function CardPlanes( { card, recomended, icon, type }: Card ) {
  const navigate = useNavigate();

  const handlePlan = (dataCard: any) => {
    localStorage.setItem("userPlan", JSON.stringify({
      name: dataCard.name,
      price: type !== 0 ? dataCard.price  - 0.05*dataCard.price : dataCard.price
    }));
    navigate('/resumen');
  }  

  return (
    <div className='card-planes'>
      {recomended && <p className='card-planes__recomended'>Plan recomendado</p>}
      <div className='card-planes__title'>
        <div className='card-planes__title--text'>
          {card.name && <h1>{card.name}</h1>}
          <p>COSTO DE PLAN</p>
          {type !== 0 && <span>${card.price} antes</span>}
          {type !== 0 ? <h2>${card.price  - 0.05*card.price} al mes</h2> : <h2>${card.price} al mes</h2>}
        </div>
        {icon && <img src={icon} alt="Icon"/>}
      </div>
      <div className='card-planes__divider'></div>
      <div className='card-planes__content'>
        <ul>
        {card.description && card.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
        </ul>
        <button className='card-planes__content--button' onClick={() => handlePlan(card)}>Seleccionar Plan</button>
      </div>
    </div>
    
  )
}

export default CardPlanes