import styles from "./AnimalSummary.module.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { getImageURL } from "../../utils/functions";

const AnimalSummary = ({ animal }) => {
  const [state, setState] = useState("small");
  const handleClick = () => {
    state === "small" ? setState("big") : setState("small")
  }

  const swapDescriptions = () => {
    if(state === "big"){
      return (
        <p>{animal.description}</p>
      )
    } else {
      let fullDescription = animal.description
      return(
        <p>{fullDescription.slice(0, 200)+ "..."}</p>
      )
    }
  }


  return (
    <div className={styles.AnimalSummary__container}>
      <div className={styles.top__summary}>
        <div className={styles.top__text}>
          <p className={styles.animal__name}>{animal.name}</p>
          <p>Found: {animal.found}</p>
          <p>Diet: {animal.food}</p>
          <p>group: <NavLink className={styles.profile__link} to={"/"+animal.group}>{animal.group}</NavLink></p>
        </div>
        <div className={styles.image__container}>
          <img  className={styles.image} src={getImageURL(animal.imageURL)} height="100%" width="auto"/>
        </div>
      </div>
      <div className={styles.bottom__summary}>
        {swapDescriptions()}
      </div>
      <div onClick={handleClick} className={styles.readMore__button} >{state === "big"  ? "Read less" : "Read more"}</div>
    </div>
  );
};

export default AnimalSummary;
