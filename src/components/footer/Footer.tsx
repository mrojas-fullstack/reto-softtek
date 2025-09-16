import footerLogo from '../../assets/footer/logo-footer.svg'
import './footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={footerLogo} alt="Footer logo" />
        <p>© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  )
}

export default Footer