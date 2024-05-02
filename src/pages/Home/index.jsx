import { useState } from "react";
import MainContentLayout from "../MainContentLayout";
import styles from "./Home.module.css";
import { animals } from "../../data/data";

const Home = ({ title }) => {
  return (
    <>
      <MainContentLayout sideBarContentArray={animals} title={title} />
    </>
  );
};

export default Home;
