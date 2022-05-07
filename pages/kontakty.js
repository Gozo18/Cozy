import Image from "next/image";

import styles from "@/styles/Contacts.module.scss";

export default function Ourjobs() {
  return (
    <div className={styles.container}>
      <div className={styles.homeHeader}>
        <h1>Výroba a oprava čalouněného nábytku</h1>
        <p>Zakázková výroba, oprava nábytku a automotive potahů.</p>
      </div>
      <div className={styles.contactBox}>
        <div className={styles.contactImageBox}>
          <div className={styles.contactImage}>
            <Image
              src='/mishaOfi.png'
              alt='Cozy Buddy'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className={styles.contacts}>
          <div>Michaela Veselská</div>
          <div>telefon:</div>
          <div>
            <a href='tel:+420721600240'>+420 721 600 240</a>
          </div>
          <div>e-mail:</div>
          <div>
            <a href='mailto:info@cozybuddy.cz'>info@cozybuddy.cz</a>
          </div>
        </div>
      </div>
    </div>
  );
}
