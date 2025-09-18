import { useEffect, useRef, useState } from "react";
import { ChevronDown, CircleAlert } from "lucide-react";
import "./select.scss";

interface SelectProps {
  docType: string;
  onChangeDocType: (value: string) => void;
  docNumber: string;
  onChangeDocNumber: (value: string) => void;
  error?: string;
}

const Select = ({ docType, onChangeDocType, docNumber, onChangeDocNumber, error }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["DNI", "CE", "Pasaporte"];
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onChangeDocType(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className={error ? 'select select__error' : 'select'}>
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
          onChange={(e) => onChangeDocNumber(e.target.value)}
          required
        />
      </div>
    </div>
    {error && <p className="select__error-message"><CircleAlert width={16} height={16} color="#ec0b35"/> {error}</p>}
    </>
  );
};

export default Select;
