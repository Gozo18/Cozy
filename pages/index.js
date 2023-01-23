import SimpleSlider from "@/components/slick/slider";
import List from "@/components/list";
import styles from "@/styles/Home.module.scss";
import { API_URL } from "@/config/index";
import Heading from "@/components/Heading";
import HomeIcons from "@/components/HomeIcons";
import ColorSlider from "@/components/ColorSlider";
import ColorSelect from "@/components/ColorSelect";

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading />
      <HomeIcons />

      {/* {offers.length === 0 && (
        <h2 className={styles.subheader}>Nic na prodej</h2>
      )}
      {offers.length > 0 && (
        <div>
          <h2 className={styles.subheader}>Na prodej:</h2>
          <SimpleSlider offers={offers} />
        </div>
      )} */}

      {/* <div className={styles.listBox}>
        {creations.map((creation) => (
          <List key={creation.id} creation={creation} />
        ))}
      </div> */}

      {/* <ColorSlider /> */}
      <h2 className={styles.subheader}>Výběr látek:</h2>
      <ColorSelect />
    </div>
  );
}



/* export async function getStaticProps() {
  const res1 = await fetch(`${API_URL}/creations?_sort=date:DESC&_limit=4`);
  const creations = await res1.json();

  const res2 = await fetch(`${API_URL}/offers?_sort=id:ASC`);
  const offers = await res2.json();

  return {
    props: { creations, offers },
    revalidate: 1,
  };
} */
