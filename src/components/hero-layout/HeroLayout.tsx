import Header from '../header/Header'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import { useAuth } from '../../context/AuthContext';

function HeroLayout() {
  const { setIsAuthenticated } = useAuth();
  return (
    <>
    <Header />
    <main>
      <Hero setIsAuthenticated={setIsAuthenticated}/>
    </main>
    <Footer />
    </>
  )
}

export default HeroLayout