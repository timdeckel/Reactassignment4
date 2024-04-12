import SideBar from "../../components/SideBar";
import styles from "./Mammals.module.css";
import { MammalList } from "../../data/data";
import MainContentLayout from "../MainContentLayout";
const Mammals = ({ title }) => {
  return (
    <>
      <MainContentLayout sideBarContentArray={MammalList} title={title} />
    </>
  );
};

export default Mammals;
