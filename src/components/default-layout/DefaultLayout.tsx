import { Navigate, Outlet } from "react-router-dom"
import Header from "../header/Header"
import { useAuth } from "../../context/AuthContext";

function DefaultLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <>
    <Header />
    <main>
      {isAuthenticated ? <Outlet /> :<Navigate to="/" />}
    </main>
    </>
  )
}

export default DefaultLayout