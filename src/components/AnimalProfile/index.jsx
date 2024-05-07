import styles from "./AnimalProfile.module.css";
import { getImageURL } from "../../utils/functions";

const AnimalProfile = ({ animal }) => {
  return (
    <div className={styles.AnimalSummary__container}>
      <div className={styles.top__summary}>
        <div className={styles.top__text}>
          <p className={styles.animal__name}>{animal.name}</p>
          <p>Found: {animal.found}</p>
          <p>Diet: {animal.food}</p>
          <p>group: {animal.group}</p>
        </div>
        <div className={styles.image__container}>
          <img  className={styles.image} src={getImageURL(animal.imageURL)} height="100%" width="auto"/>
        </div>
      </div>
      <div className={styles.bottom__summary}>
      <p>{animal.description}</p>
      </div>
     
    </div>
  );
};

export default AnimalProfile;


