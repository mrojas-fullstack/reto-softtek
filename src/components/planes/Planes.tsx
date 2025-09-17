import { CircleChevronLeft } from 'lucide-react'

import Card from '../card/Card'
import './planes.scss'
import { useState } from 'react'
import { cards, cardsPlanes } from '../../utils/dataDummy'
import CardPlanes from '../card-planes/CardPlanes'
import Breadcumbs from '../breadcumbs/Breadcumbs'

function Planes() {
  const [selectedOption, setSelectedOption] = useState<string>();
  

  return (
    <div className='planes'>
      <Breadcumbs active={1} />
      <div className='planes__content'>
        <span className='planes__content--back'><CircleChevronLeft /> Volver</span>
        <div className='planes__content--wrapper'>
          <div className='planes__content--text'>
            <h1>Rocío ¿Para quién deseas cotizar?</h1>
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
      { Number(selectedOption) >= 0 &&
        <section className='planes__options'>
          {cardsPlanes[Number(selectedOption)].map((card, index) => (
            <CardPlanes 
              key={index}
              card={card}
            />
          ))}
        </section>
      }
    </div>
  )
}

export default Planes