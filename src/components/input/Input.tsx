import { CircleAlert } from "lucide-react";
import "./input.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

function Input({ value, onChange, error }: InputProps) {
  return (
    <>
    <div className={error ? 'input input__error' : 'input'}>
      <label htmlFor="cell">Celular</label>
      <input
        id="cell"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
    {error && <p className="input__error-message"><CircleAlert width={16} height={16} color="#ec0b35"/> {error}</p>}
    </>
  )
}

export default Input