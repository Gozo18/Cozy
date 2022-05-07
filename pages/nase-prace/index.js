import List from "@/components/list";
import styles from "@/styles/Home.module.scss";
import { API_URL, PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";

export default function CreationPage({ creations, page, total }) {
  const cres = creations;

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

        <Pagination page={page} total={total} />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const totalRes = await fetch(`${API_URL}/creations/count`);
  const total = await totalRes.json();

  const res = await fetch(
    `${API_URL}/creations?_sort=date:DESC&_limit=${PER_PAGE}&_start=${start}`
  );
  const creations = await res.json();

  return {
    props: { creations, page: +page, total },
  };
}
