import { NavLink, Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import { animals } from "../../data/data";

const SideBar = ({ list, title, contentID, setContent }) => {
 
  return (
    <>
      <section className={styles.SideBar__container}>
        <header className={styles.sidebar__header}>{title}</header>
        <div className={styles.SideBar__content}>
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
