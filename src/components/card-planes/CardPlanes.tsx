import './cardPlanes.scss'

interface CardPlanesProps {
  recomended: boolean,
  icon: string,
  title: string,
  cost: string,
  mark: string,
  description: Array<string>,
}

interface Card{
  card: CardPlanesProps
}

function CardPlanes( { card }: Card ) {

  return (
    <div className='card-planes'>
      {card.recomended && <p className='card-planes__recomended'>Plan recomendado</p>}
      <div className='card-planes__title'>
        <div className='card-planes__title--text'>
          {card.title && <h1>{card.title}</h1>}
          <p>COSTO DE PLAN</p>
          {card.mark !== '' && <span>{card.mark}</span>}
          {card.cost && <h2>{card.cost}</h2>}
          
        </div>
        {card.icon && <img src={card.icon} alt="Icon"/>}
      </div>
      <div className='card-planes__divider'></div>
      <div className='card-planes__content'>
        <ul>
        {card.description && card.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
        </ul>
        <button className='card-planes__content--button'>Seleccionar Plan</button>
      </div>
    </div>
    
  )
}

export default CardPlanes