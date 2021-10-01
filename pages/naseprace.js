import List from "../components/list";
import styles from "../styles/Home.module.scss";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.homeHeader}>
        <h1>Čalounictví a nábytek</h1>
        <p>Zakázková výroba, oprava nábytku a automotive potahů.</p>
      </div>
      <List />
    </div>
  );
}
