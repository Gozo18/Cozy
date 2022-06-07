import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ColorSelect.module.scss";

function ColorSelect() {
  const images = {
    img1: {
      src: "/select1.jpg",
    },
    img2: {
      src: "/select2.jpg",
    },
    img3: {
      src: "/select3.jpg",
    },
    img4: {
      src: "/select4.jpg",
    },
    img5: {
      src: "/select5.jpg",
    },
    img6: {
      src: "/select6.jpg",
    },
  };

  const [image, setImage] = useState(images.img1.src);

  const imgChange = (e) => {
    const imageData = e.currentTarget.getAttribute("data-image");

    let box = document.getElementsByClassName("colorBox");

    Object.keys(box).map((idx) => (box[idx].style.outlineWidth = "0"));

    e.currentTarget.style.outlineWidth = "3px";

    setImage(images[imageData].src);
  };

  return (
    <div className={styles.colorBox}>
      <div className={styles.colorItem}>
        <span className={styles.colorImage}>
          <Image
            src={image}
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </span>
      </div>
      <div className={styles.colorSelectors}>
        <div className='colorBox' data-image='img1' onClick={imgChange}>
          <Image
            src='/latka1.jpg'
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='colorBox' data-image='img2' onClick={imgChange}>
          <Image
            src='/latka2.jpg'
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='colorBox' data-image='img3' onClick={imgChange}>
          <Image
            src='/latka3.jpg'
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='colorBox' data-image='img4' onClick={imgChange}>
          <Image
            src='/latka4.jpg'
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='colorBox' data-image='img5' onClick={imgChange}>
          <Image
            src='/latka5.jpg'
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='colorBox' data-image='img6' onClick={imgChange}>
          <Image
            src='/latka6.jpg'
            alt='Cozy Buddy Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
}

export default ColorSelect;
