import './card.scss'
import { Check } from 'lucide-react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  idx?: number;
  selectedOption?: string;
  setSelectedOption?: (value: string) => void;
}

function Card( {icon, title, description, idx, selectedOption, setSelectedOption}: CardProps ) {
  const handleChange = () => {
    setSelectedOption && setSelectedOption(String(idx));
  };

  return (
    <div className={`card ${selectedOption === String(idx) ? 'card__border' : ''}`}>
      <div className='card__radio'>
        <input
          type="radio"
          name='cardRadio'
          id={`cardRadio${idx}`}
          value={idx}
          checked={selectedOption === String(idx)}
          onChange={handleChange}
          className='card__radio--input'
        />
        <label className='card__radio--style' htmlFor={`cardRadio${idx}`}>
          {selectedOption === String(idx) && <Check size={16} strokeWidth={3.5} className="card__radio--icon" />}
        </label>
        
      </div>
      <div className='card__icon-title'>
        {icon && <img src={icon} alt="Icon"/>}
        {title && <h1>{title}</h1>}
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}

export default Card