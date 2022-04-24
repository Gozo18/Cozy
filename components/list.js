import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

import styles from "@/styles/List.module.scss";

function List({ creation }) {
  return (
    <Link href={`/nase-prace/${creation.slug}`}>
      <a className={styles.listItem}>
        <span className={styles.listImage}>
          <Image
            src={creation.image ? creation.image.url : "/CB-cap.jpg"}
            alt='Cozy Buddy'
            layout='fill'
            objectFit='contain'
          />
        </span>
        <div className={styles.listText}>
          <h3>{creation.name}</h3>
          <p>
            {creation.description}
            {/* {creation.description.substring(0, 95)}
            {creation.description.length >= 95 && `...`} */}
          </p>
          <span className={styles.moreLink}>
            více <IoChevronForward />
          </span>
        </div>
      </a>
    </Link>
  );
}

export default List;
