import { NavLink, Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = ({ list, title }) => {
  return (
    <>
      <section className={styles.SideBar__container}>
        <header className={styles.sidebar__header}>{title}</header>
        <div className={styles.SideBar__content}>
          {generateSideBarContent(list, title)}
        </div>
      </section>
    </>
  );
};

const generateSideBarContent = (list) => {
  if (list && list.length > 0) {
    return list.map((animal) => (
      <div onClick={handleClick} key={animal.name}>
        {animal.name}
      </div>
    ));
  } else {
    return <p>No items to display</p>;
  }
};

const handleClick = () => {};

export default SideBar;
