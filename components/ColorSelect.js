import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ColorSelect.module.scss";

function ColorSelect() {
  const images = {
    img1: {
      name: "img1",
      src: "/img1.jpg",
    },
    img2: {
      name: "img2",
      src: "/img2.jpg",
    },
  };

  const [image, setImage] = useState(images.img1.src);

  const imgChange = (e) => {
    const imageData = e.target.getAttribute("data-image");

    if (imageData === "img1") {
      setImage(images.img1.src);
    } else {
      setImage(images.img2.src);
    }
  };

  return (
    <div className={styles.colorBox}>
      <div className={styles.colorItem}>
        <span className={styles.colorImage}>
          <Image src={image} alt='Cozy Buddy Image' width={384} height={512} />
        </span>
      </div>
      <div className={styles.colorSelectors}>
        <div
          className={styles.colorSelectorYellow}
          data-image='img1'
          onClick={imgChange}
        ></div>
        <div
          className={styles.colorSelectorGray}
          data-image='img2'
          onClick={imgChange}
        ></div>
      </div>
    </div>
  );
}

export default ColorSelect;
