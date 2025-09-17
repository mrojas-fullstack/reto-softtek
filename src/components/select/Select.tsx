import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import "./select.scss";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [docType, setDocType] = useState("DNI");
  const [docNumber, setDocNumber] = useState("");
  const options = ["DNI", "CE", "Pasaporte"];

  const selectRef = useRef(null) as any;

  const handleSelect = (option: any) => {
    setDocType(option);
    setIsOpen(false);
  };

  // Detectar clic fuera del select
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="select">
      <div 
        className="select__dropdown" 
        ref={selectRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{docType}</span>
        <ChevronDown size={20} className={`select__icon ${isOpen ? "select__icon--open" : ""}`} />
        {isOpen && (
          <ul className="select__dropdown--options">
            {options.map((opt) => (
              <li key={opt} onClick={() => handleSelect(opt)}>
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="select__divider"></div>

      <div className="select__input">
        <label>Nro. de documento</label>
        <input
          type="text"
          value={docNumber}
          onChange={(e) => setDocNumber(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default Select;
