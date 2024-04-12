import { NavLink, Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"


const Layout = ({  }) => {
  return (
    <>
    <Header />
    <NavBar />
    <section className={styles.main__content__wrapper}>
      <Outlet />
    </section>
    <Footer />
    </>
  )
}

export default Layout

// const Layout = ({ children }) => {
//   return (
//     <>
//     {children}
//       <nav>
//         <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/">Home</NavLink>
//         <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Birds">Birds</NavLink> 
//         <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Reptiles">Reptiles</NavLink>
//         <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/Mammals">Mammals</NavLink>
//       </nav>
//       <Outlet />
//     </>
//   )
// }