import Router from './routes/routes'
import { AuthProvider } from './context/AuthContext';
import './App.scss'

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}

export default App
