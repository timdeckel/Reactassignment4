import SideBar from "../../components/SideBar";
import styles from "./Birds.module.css";
import { BirdList } from "../../data/data";
import AnimalProfile from "../../components/AnimalProfile";
import MainContentLayout from "../MainContentLayout";

const Birds = ({ title }) => {
  return (
    <>
      <MainContentLayout sideBarContentArray={BirdList} title={title} />
    </>
  );
};

export default Birds;
