import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ColorSelect.module.scss";

function ColorSelect() {
  const images = {
    img1: {
      src: "/image1.webp",
    },
    img2: {
      src: "/image2.webp",
    },
    img3: {
      src: "/image3.webp",
    },
    img4: {
      src: "/image4.webp",
    },
  };

  const [image, setImage] = useState(images.img1.src);

  const imgChange = (e) => {
    const imageData = e.target.getAttribute("data-image");

    document.getElementById("yellowBox").style.outlineWidth = "0px";
    document.getElementById("grayBox").style.outlineWidth = "0px";
    document.getElementById("greenBox").style.outlineWidth = "0px";
    document.getElementById("redBox").style.outlineWidth = "0px";
    e.target.style.outlineWidth = "3px";
    e.target.style.outlineStyle = "solid";
    e.target.style.outlineColor = "#adadad";

    setImage(images[imageData].src);
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
          id='yellowBox'
          className={styles.colorSelectorYellow}
          data-image='img1'
          onClick={imgChange}
        ></div>
        <div
          id='grayBox'
          className={styles.colorSelectorGray}
          data-image='img2'
          onClick={imgChange}
        ></div>
        <div
          id='greenBox'
          className={styles.colorSelectorGreen}
          data-image='img3'
          onClick={imgChange}
        ></div>
        <div
          id='redBox'
          className={styles.colorSelectorRed}
          data-image='img4'
          onClick={imgChange}
        ></div>
      </div>
    </div>
  );
}

export default ColorSelect;
