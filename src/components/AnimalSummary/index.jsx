import styles from "./AnimalSummary.module.css";
import { useState } from "react";

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
          <p>group: <a href="">{animal.group}</a></p>
        </div>
        <div className={styles.image}></div>
      </div>
      <div className={styles.bottom__summary}>
      <p>{swapDescriptions()}</p>
      </div>
      <div onClick={handleClick} className={styles.readMore__button}>Read more...</div>
    </div>
  );
};

export default AnimalSummary;
