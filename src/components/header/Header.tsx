import { Phone } from 'lucide-react'
import headerLogo from '../../assets/header/logo-header.svg'
import './header.scss'

function Header() {
  return (
    <header className='header'>
      <img src={headerLogo} alt="Header logo" />
      <div className='header__contact'>
        <p className='header__contact--text'>¡Compra por este medio!</p>
        <p className='header__contact--phone'><Phone /> (01) 411 6001</p>
      </div>
    </header>
  )
}

export default Header