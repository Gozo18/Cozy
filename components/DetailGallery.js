import LightGallery from "lightgallery/react";

import styles from "@/styles/Detail.module.scss";

function DetailGallery({ pics }) {
  console.log(pics);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className={styles.galleryBox}>
      <LightGallery onInit={onInit} speed={500}>
        {pics.map((img, i) => (
          <a
            href={img.formats.medium.url}
            className={styles.galleryImage}
            key={i}
          >
            <img alt='Cozy Buddy' src={img.url} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default DetailGallery;
