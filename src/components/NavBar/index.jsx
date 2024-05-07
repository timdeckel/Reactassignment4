import { NavLink, Outlet } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Bird">Birds</NavLink> 
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Reptile">Reptiles</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Mammal">Mammals</NavLink>
      </nav>
    </>
  )
};

export default NavBar;