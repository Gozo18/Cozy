import List from "@/components/list";
import styles from "@/styles/Home.module.scss";
import { API_URL } from "@/config/index";

export default function Contacts(creations) {
  const cres = creations.creations;

  return (
    <div className={styles.container}>
      <div className={styles.homeHeader}>
        <h1>Výroba a oprava čalouněného nábytku</h1>
        <p>Zakázková výroba, oprava nábytku a automotive potahů.</p>
      </div>

      {creations.length === 0 && <h3>Žádné zakázky</h3>}

      <div className={styles.listBox}>
        {cres.map((creation) => (
          <List key={creation.id} creation={creation} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/creations?_sort=date:DESC`);
  const creations = await res.json();

  return {
    props: { creations },
    revalidate: 1,
  };
}
