import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import './App.scss'
import Planes from './components/planes/Planes'
import Resumen from './components/resumen/Resumen'

function App() {

  return (
    <>
    <Header />
    <main>
      {/* <Hero /> */}
      {/* <Planes /> */}
      <Resumen />
    </main>
    <Footer />
    </>
  )
}

export default App
