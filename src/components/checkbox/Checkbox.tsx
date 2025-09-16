import { useState } from "react";
import { Check } from "lucide-react";
import "./Checkbox.scss";

const Checkbox = ({ label } : {label: string}) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className={`checkbox__box ${checked ? "checkbox__box--checked" : ""}`}>
        {checked && <Check size={16} strokeWidth={3.5} className="checkbox__icon" />}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;
