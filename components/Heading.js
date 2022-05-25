import Image from "next/image";
import styles from "@/styles/Home.module.scss";

function Heading() {
  return (
    <>
      {/* <div className={styles.responseImage}>
        <Image
          src='/hero.jpg'
          alt='Cozy Buddy banner'
          layout='fill'
          objectFit='contain'
        />
      </div> */}
      <div className={styles.homeHeader}>
        <h1>Výroba a oprava čalouněného nábytku</h1>
        <p>
          Zakázková výroba, renovace starého čalounění a autočalounické práce.
        </p>
      </div>
    </>
  );
}

export default Heading;
