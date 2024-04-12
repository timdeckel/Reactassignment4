import styles from "./AnimalProfile.module.css";

const AnimalProfile = ({ text }) => {
  return (
    <div className={styles.animalProfile__container}>
      <p>{text}</p>
    </div>
  );
};

export default AnimalProfile;
