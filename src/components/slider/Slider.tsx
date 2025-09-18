import { useState } from 'react';
import './slider.scss'
import { cardsPlanesUser } from '../../utils/dataDummy';
import CardPlanes from '../card-planes/CardPlanes';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

function Slider({slides, type}:any) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="slider">
      <div 
        className="slider__content" 
        style={{
          transform: `translateX(-${current * 75}%)`,
        }}
      >
        {slides.map((slide: any, index:number) => (
          <div key={index} className={`slider__slide ${index === current ? "active" : ""}`}>
            <CardPlanes 
              type={type}
              key={index}
              card={slide}
              recomended={cardsPlanesUser[index]?.recomended}
              icon={cardsPlanesUser[index]?.icon}
            />
          </div>
        ))}
      </div>
      <div className="slider__buttons">
        <button className="slider__btn slider__btn--prev" onClick={prevSlide}>
          <CircleChevronLeft width={32} height={32} color='#A9AFD9'/>
        </button>
        <span>{current + 1}/{slides.length}</span>
        <button className="slider__btn slider__btn--next" onClick={nextSlide}>
          <CircleChevronRight width={32} height={32} color='#A9AFD9'/>
        </button>
      </div>
    </div>
  );
}

export default Slider