import { useEffect, useState } from 'react'
import heroImg from '../../assets/hero/hero.svg'
import Checkbox from '../checkbox/Checkbox'
import Input from '../input/Input'
import Link from '../link/Link'
import Select from '../select/Select'
import './hero.scss'

function Hero() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rimac-front-end-challenge.netlify.app/api/user.json")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  console.log('user: ', user);

  if (loading) return <p>Cargando...</p>;
  return (
    <div className='hero'>
      <img src={heroImg} alt="Hero" width={480} height={560}/>
      <section className='hero__content-wrapper'>
        <div className='hero__content'>
          <span className='hero__tag'><p>Seguro Salud Flexible</p></span>
          <h1 className='hero__title'>Creado para ti y tu familia</h1>
          <p className='hero__description'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
          <form className='hero__form'>
            <Select />
            <Input />
            <div className='hero__form--checkboxes'>
              <Checkbox label="Acepto lo Política de Privacidad"/>
              <Checkbox label="Acepto la Política Comunicaciones Comerciales"/>
            </div>
            <Link label="Aplican Términos y Condiciones."/>
            <button type='submit'>Cotiza aquí</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Hero