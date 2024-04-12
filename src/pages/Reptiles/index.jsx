import SideBar from "../../components/SideBar";
import styles from "./Reptiles.module.css";
import { ReptileList } from "../../data/data";
import MainContentLayout from "../MainContentLayout";

const Reptiles = ({ title }) => {
  return (
    <>
      <MainContentLayout sideBarContentArray={ReptileList} title={title} />
    </>
  );
};

export default Reptiles;
