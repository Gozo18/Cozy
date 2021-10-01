import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

import styles from "./Slider.module.scss";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={styles.sliderBlock}>
      <h2>Naše práce</h2>
      <Slider {...settings}>
        <Link href="/">
          <a>
            <div className={styles.sliderItem}>
              <div className={styles.sliderImage}>
                <Image
                  src="/chair.jpg"
                  alt="Cozy Buddy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.sliderGlass}>
                <h3>Židle s koženkou</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nulla non lectus sed nisl molestie malesuada. In convallis.
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.sliderItem}>
              <div className={styles.sliderImage}>
                <Image
                  src="/chair.jpg"
                  alt="Cozy Buddy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.sliderGlass}>
                <h3>Židle s koženkou</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nulla non lectus sed nisl molestie malesuada. In convallis.
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.sliderItem}>
              <div className={styles.sliderImage}>
                <Image
                  src="/chair.jpg"
                  alt="Cozy Buddy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.sliderGlass}>
                <h3>Židle s koženkou</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nulla non lectus sed nisl molestie malesuada. In convallis.
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.sliderItem}>
              <div className={styles.sliderImage}>
                <Image
                  src="/chair.jpg"
                  alt="Cozy Buddy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.sliderGlass}>
                <h3>Židle s koženkou</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nulla non lectus sed nisl molestie malesuada. In convallis.
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.sliderItem}>
              <div className={styles.sliderImage}>
                <Image
                  src="/chair.jpg"
                  alt="Cozy Buddy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.sliderGlass}>
                <h3>Židle s koženkou</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nulla non lectus sed nisl molestie malesuada. In convallis.
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.sliderItem}>
              <div className={styles.sliderImage}>
                <Image
                  src="/chair.jpg"
                  alt="Cozy Buddy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.sliderGlass}>
                <h3>Židle s koženkou</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nulla non lectus sed nisl molestie malesuada. In convallis.
                </p>
              </div>
            </div>
          </a>
        </Link>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
