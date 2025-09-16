import { useState } from 'react'
import "./input.scss";

function Input() {
  const [celNumber, setCelNumber] = useState("");

  return (
    <div className="input">
      <label>Celular</label>
      <input
        type="text"
        value={celNumber}
        onChange={(e) => setCelNumber(e.target.value)}
      />
    </div>
  )
}

export default Input