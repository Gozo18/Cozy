import SimpleSlider from "@/components/slick/slider";
import List from "@/components/list";
import styles from "@/styles/Home.module.scss";
import { API_URL } from "@/config/index";
import Heading from "../components/Heading";

export default function Home({ creations, offers }) {
  return (
    <div className={styles.container}>
      <Heading />
      <SimpleSlider offers={offers} />

      {creations.length === 0 && (
        <h2 className={styles.subheader}>Žádné zakázky</h2>
      )}
      {creations.length > 0 && <h2 className={styles.subheader}>Naše práce</h2>}

      <div className={styles.listBox}>
        {creations.map((creation) => (
          <List key={creation.id} creation={creation} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res1 = await fetch(`${API_URL}/creations?_sort=date:DESC&_limit=4`);
  const creations = await res1.json();

  const res2 = await fetch(`${API_URL}/offers?_sort=id:ASC`);
  const offers = await res2.json();

  return {
    props: { creations, offers },
    revalidate: 1,
  };
}
