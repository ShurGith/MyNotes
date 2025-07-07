import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"
function HeaderComponent() {
  return (
    <header className="header">
        <h2 className="title">Notes App</h2>
        <ul className="nav-list">
            <li><NavLink to="/" className="link">Home</NavLink></li>
            <li><NavLink to="/notes" className="link">Notas</NavLink></li>
            <li><NavLink to="/create" className="link">Crear nota</NavLink></li>

        </ul>
    </header>
  )
}

export default HeaderComponent