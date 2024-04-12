import styles from "./Header.module.css"
const Header = () => {
  return (
    <>
      <div className={styles.header__container}>
        <h2 className={styles.header__headline}>Australia Zoo!</h2>
      </div>
    </>
  );
};

export default Header;
