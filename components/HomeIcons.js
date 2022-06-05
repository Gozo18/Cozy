import Image from "next/image";
import styles from "@/styles/Home.module.scss";

function HomeIcons() {
  return (
    <div className={styles.homeHeader}>
      <h2>Čalouníme</h2>
      <div className={styles.homeIconsBox}>
        <div className={styles.homeIconBox}>
          <div className={styles.homeIcon}>
            <Image
              src='/iconChair.svg'
              alt='židle'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h3>Židle</h3>
        </div>
        <div className={styles.homeIconBox}>
          <div className={styles.homeIcon}>
            <Image
              src='/iconArmchair.svg'
              alt='křesla'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h3>Křesla</h3>
        </div>
        <div className={styles.homeIconBox}>
          <div className={styles.homeIcon}>
            <Image
              src='/iconCouch.svg'
              alt='sedačky'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h3>Sedačky</h3>
        </div>
        <div className={styles.homeIconBox}>
          <div className={styles.homeIcon}>
            <Image
              src='/iconTaboret.svg'
              alt='taburety'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h3>Taburety</h3>
        </div>
      </div>
    </div>
  );
}

export default HomeIcons;
