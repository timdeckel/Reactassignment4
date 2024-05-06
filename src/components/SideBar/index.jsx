import styles from "./SideBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const SideBar = ({ list, title, contentID, setContent }) => {
  const [navbarState, setNavbarState] = useState(false);
  const handleClick = () => {
    console.log("click")
    setNavbarState(!navbarState);
  }
  return (
    <>
      <section className={styles.SideBar__container}>
        <div className={styles.navbar__structure}>
          <header className={styles.sidebar__header}>{title}</header>
          <div className={styles.hamburger__button} onClick={handleClick}><GiHamburgerMenu /></div>
        </div>
        <div className={`${styles.SideBar__content} ${navbarState ? styles.active : ""}`}>
          {generateSideBarContent(list, contentID, setContent)}
        </div>
      </section>
    </>
  );
};

const generateSideBarContent = (list, contentID, setContent) => {
  const handleClick = (animal) => {animal === contentID ? setContent(null) : setContent(animal)}
  if (list && list.length > 0) {
    return list.map((animal) => (
      <div className={styles.SideBar__item } onClick={() => handleClick(animal)} key={animal.name}>
        {animal.name}
      </div>
    ));
  } else {
    return <p>No items to display</p>;
  }
};


export default SideBar;
