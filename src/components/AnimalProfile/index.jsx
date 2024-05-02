import styles from "./AnimalProfile.module.css";

const AnimalProfile = ({ animal }) => {
  return (
    <div className={styles.animalProfile__container}>
      <p>{animal.name}</p>
    </div>
  );
};

export default AnimalProfile;
