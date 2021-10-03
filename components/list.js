import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

import styles from "../styles/List.module.scss";

function List() {
  return (
    <div className={styles.listBox}>
      <Link href="/detail">
        <a className={styles.listItem}>
          <div className={styles.listImage}>
            <Image
              src="/sofa.jpg"
              alt="Cozy Buddy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.listText}>
            <h3>Sedačka</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla
              non lectus sed nisl molestie malesuada. In convallis.{" "}
              <span>
                Detail <IoChevronForward />
              </span>
            </p>
          </div>
        </a>
      </Link>
      <Link href="/detail">
        <a className={styles.listItem}>
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla
              non lectus sed nisl molestie malesuada. In convallis.{" "}
              <span>
                Detail <IoChevronForward />
              </span>
            </p>
          </div>
        </a>
      </Link>
      <Link href="/detail">
        <a className={styles.listItem}>
          <div className={styles.listImage}>
            <Image
              src="/sofa.jpg"
              alt="Cozy Buddy Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.listText}>
            <h3>Sedačka</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla
              non lectus sed nisl molestie malesuada. In convallis.{" "}
              <span>
                Detail <IoChevronForward />
              </span>
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default List;
