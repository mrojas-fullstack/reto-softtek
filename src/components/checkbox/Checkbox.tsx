import { Check } from "lucide-react";
import "./checkbox.scss";

interface CheckboxProps {
  id:string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

const Checkbox = ({ id, label, checked, onChange, error }: CheckboxProps) => {
  return (
    <label className='checkbox' htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className={`${error ? 'checkbox__box checkbox__box--error' : 'checkbox__box'} ${checked ? "checkbox__box--checked" : ""}`}>
        {checked && <Check size={16} strokeWidth={3.5} className="checkbox__icon" />}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;
