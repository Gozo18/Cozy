import styles from "@/styles/Footer.module.scss";

function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.notLogged}>
          <p>© 2022 cozy buddy</p>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
