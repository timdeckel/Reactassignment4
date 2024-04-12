import { NavLink, Outlet } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Birds">Birds</NavLink> 
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Reptiles">Reptiles</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Mammals">Mammals</NavLink>
      </nav>
    </>
  )
};

export default NavBar;