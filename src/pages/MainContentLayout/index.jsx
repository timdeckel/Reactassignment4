import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { BirdList } from "../../data/data";
import styles from "./MainContentLayout.module.css";
import AnimalProfile from "../../components/AnimalProfile";

const MainContentLayout = ({ sideBarContentArray, title }) => {
  return (
    <>
      <SideBar list={sideBarContentArray} title={title} />
      <div className={styles.main__content}>
        <h1>{title}</h1>
        <AnimalProfile text={"derp"} />
      </div>
    </>
  );
};

export default MainContentLayout;
