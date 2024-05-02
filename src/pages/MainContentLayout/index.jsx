import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../components/SideBar";
import styles from "./MainContentLayout.module.css";
import AnimalProfile from "../../components/AnimalProfile";
import AnimalSummary from "../../components/AnimalSummary";

const MainContentLayout = ({ sideBarContentArray, title }) => {
  const [content, setContent] = useState(null);
  const handleContent = () => {
    if(title !== "Welcome Page"){
      return(content !== null ? <AnimalProfile animal={content}/> : "Welcome to the " + title + " page! we're glad you want to learn more about these amazing animals!")
    } else {
      return(content !== null ? <AnimalSummary animal={content}/> : " Welcome to the Australian Zoo! We hope you learn a bunch from the native animals that live in Australia!")
    }
}
  return (
    <>
      <SideBar list={sideBarContentArray} title={title} contentID={content} setContent={setContent} />
      <div className={styles.main__content}>
        {handleContent()}
      </div>
    </>
  );
};



export default MainContentLayout;
