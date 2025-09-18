import footerLogo from '../../assets/footer/logo-footer.svg'
import footerLogoM from '../../assets/footer/logo-footer-mobile.svg'
import './footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={footerLogoM} className='footer__content--logoM' alt="Footer logo mobile" />
        <img src={footerLogo} className='footer__content--logo' alt="Footer logo" />
        <div className='footer__divider'></div>
        <p>© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  )
}

export default Footer