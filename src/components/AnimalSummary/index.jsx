import styles from "./AnimalSummary.module.css";

const AnimalSummary = ({ animal }) => {
  console.log( "anisum "+ animal)
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
      <p>{animal.description}</p>
      </div>
    </div>
  );
};

export default AnimalSummary;
