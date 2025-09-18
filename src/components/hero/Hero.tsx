import { useEffect, useState } from 'react'
import heroImg from '../../assets/hero/hero.svg'
import Checkbox from '../checkbox/Checkbox'
import Input from '../input/Input'
import Link from '../link/Link'
import Select from '../select/Select'
import { useHeroForm } from '../../hooks/useHeroForm'
import { useNavigate } from 'react-router-dom'
import { userApi } from '../../services/api'
import './hero.scss'
import type { IUser } from '../../interfaces/user.interface'


function Hero({setIsAuthenticated}: {setIsAuthenticated: (value: boolean) => void;}) {
  const navigate = useNavigate();
  const {
    docType, setDocType,
    docNumber, setDocNumber,
    cellphone, setCellphone,
    privacy, setPrivacy,
    commercial, setCommercial,
    errors, validate
  } = useHeroForm();
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    userApi
        .get("/")
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(e =>{
          setLoading(false);
          console.log(e);
        })
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && !loading) {
      localStorage.setItem("userData", JSON.stringify({
        docType,
        docNumber,
        cellphone,
        privacy,
        commercial
      }));
      localStorage.setItem("userName", JSON.stringify(user));
      setIsAuthenticated(true);
      navigate("/planes");
    }
  };

  return (
    <div className='hero'>
      <img src={heroImg} alt="Hero" width={480} height={560}/>
      <section className='hero__content-wrapper'>
        <div className='hero__content'>
          <span className='hero__tag'><p>Seguro Salud Flexible</p></span>
          <h1 className='hero__title'>Creado para ti y tu familia</h1>
          <p className='hero__description'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
          <form className='hero__form'>
            <Select
              docType={docType}
              onChangeDocType={setDocType}
              docNumber={docNumber}
              onChangeDocNumber={setDocNumber}
              error={errors.documentError}
            />
            <Input  value={cellphone} onChange={setCellphone} error={errors.cellphone} />
            <div className='hero__form--checkboxes'>
              <Checkbox label="Acepto lo Política de Privacidad" checked={privacy} onChange={setPrivacy} error={errors.privacy} />
              <Checkbox label="Acepto la Política Comunicaciones Comerciales" checked={commercial} onChange={setCommercial} error={errors.commercial} />
            </div>
            <Link label="Aplican Términos y Condiciones."/>
            <button type='submit' onClick={handleSubmit}>Cotiza aquí</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Hero