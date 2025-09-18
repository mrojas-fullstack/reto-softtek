import { useState } from 'react'
import './range.scss'

function Range({ min = 0, max = 100, step = 1 }) {
  const [value, setValue] = useState(min);
  return (
    <div className="range">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          const val = Number(e.target.value);
          setValue(val);
          const percent = ((val - min) / (max - min)) * 100;
          e.target.style.setProperty("--value", `${percent}%`);
        }}
        className="range__slider"
      />
    </div>
  );
}

export default Range