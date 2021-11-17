import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

import styles from "@/styles/List.module.scss";

function List(creation) {
  const cre = creation.creation;

  return (
    <Link href={`/nase-prace/${cre.slug}`}>
      <a className={styles.listItem}>
        <span className={styles.listImage}>
          <Image
            src={cre.image ? cre.image.formats.small.url : "/CB-cap.jpg"}
            alt="Cozy Buddy"
            layout="fill"
            objectFit="contain"
          />
        </span>
        <div className={styles.listText}>
          <h3>{cre.name}</h3>
          <p>
            {cre.description.substring(0, 95)}
            {cre.description.length >= 95 && `...`}
            <span className={styles.moreLink}>
              více <IoChevronForward />
            </span>
          </p>
        </div>
      </a>
    </Link>
  );
}

export default List;
