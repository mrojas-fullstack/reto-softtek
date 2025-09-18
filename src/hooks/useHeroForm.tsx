import { useState } from "react";

export function useHeroForm() {
  const [docType, setDocType] = useState("DNI");
  const [docNumber, setDocNumber] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!docType || !docNumber || docNumber.length < 8) {
      newErrors.documentError = "Ingresa documento valido";
    }
    if (!cellphone || !/^\d{9}$/.test(cellphone)) newErrors.cellphone = "Ingresa un celular válido (9 dígitos)";
    if (!privacy) newErrors.privacy = "Debes aceptar la Política de Privacidad";
    if (!commercial) newErrors.commercial = "Debes aceptar las Comunicaciones Comerciales";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    docType,
    setDocType,
    docNumber,
    setDocNumber,
    cellphone,
    setCellphone,
    privacy,
    setPrivacy,
    commercial,
    setCommercial,
    errors,
    validate,
  };
}