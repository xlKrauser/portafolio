import { Link, NavLink } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  return (
    <>
      <nav className="barraNav">
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to="/">Inicio</NavLink>
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to="/acerca-de-mi">Acerca de mi</NavLink>
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to="/habilidades">Habilidades</NavLink>
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to="/proyectos">Proyectos</NavLink>
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to="/contacto">Contacto</NavLink>
      </nav>
    </>
  )
}

export default Navbar
