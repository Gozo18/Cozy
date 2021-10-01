import Image from "next/image";

import styles from "../styles/Detail.module.scss";

export default function Detail() {
  return (
    <div>
      <div className={styles.detailImage}>
        <Image
          src="/chair.jpg"
          alt="Cozy Buddy"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.detailText}>
          <h3>Židle s koženkou</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non
            lectus sed nisl molestie malesuada. In convallis. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit. Nulla non lectus sed nisl
            molestie malesuada. In convallis. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Nulla non lectus sed nisl molestie
            malesuada. In convallis. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.
          </p>
        </div>
        <div className={styles.detailGallery}>
          <div className={styles.detailGalleryImage}>
            <Image
              src="/chair.jpg"
              alt="Cozy Buddy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.detailGalleryImage}>
            <Image
              src="/chair.jpg"
              alt="Cozy Buddy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.detailGalleryImage}>
            <Image
              src="/chair.jpg"
              alt="Cozy Buddy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.detailGalleryImage}>
            <Image
              src="/chair.jpg"
              alt="Cozy Buddy"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
