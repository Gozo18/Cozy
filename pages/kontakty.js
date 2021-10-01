import Image from "next/image";

import styles from "../styles/Contacts.module.scss";

export default function Ourjobs() {
  return (
    <div className={styles.container}>
      <div className={styles.homeHeader}>
        <h1>Čalounictví a nábytek</h1>
        <p>Zakázková výroba, oprava nábytku a automotive potahů.</p>
      </div>
      <div className={styles.contactBox}>
        <div className={styles.contactImageBox}>
          <div className={styles.contactImage}>
            <Image
              src="/mishaOfi.png"
              alt="Cozy Buddy"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.contacts}>
          <div>telefon:</div>
          <div>+420 999 999 999</div>
          <div>adresa:</div>
          <div>street 99, town 999 99</div>
        </div>
      </div>
    </div>
  );
}
