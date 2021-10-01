import Image from "next/image";
import Link from "next/link";

import styles from "../styles/List.module.scss";

function List() {
  return (
    <div className={styles.listBox}>
      <div className={styles.listItem}>
        <div className={styles.listImage}>
          <Image
            src="/chair.jpg"
            alt="Cozy Buddy Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.listText}>
          <h3>Židle s koženkou</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non
            lectus sed nisl molestie malesuada. In convallis.
          </p>
        </div>
      </div>
      <div className={styles.listItem}>
        <div className={styles.listImage}>
          <Image
            src="/chair.jpg"
            alt="Cozy Buddy Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.listText}>
          <h3>Židle s koženkou</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non
            lectus sed nisl molestie malesuada. In convallis.
          </p>
        </div>
      </div>
      <div className={styles.listItem}>
        <div className={styles.listImage}>
          <Image
            src="/chair.jpg"
            alt="Cozy Buddy Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.listText}>
          <h3>Židle s koženkou</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non
            lectus sed nisl molestie malesuada. In convallis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default List;
