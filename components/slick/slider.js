import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

import styles from "./Slider.module.scss";

function SimpleSlider(offers) {
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

  const offs = offers.offers;

  return (
    <div className={styles.sliderBlock}>
      <Slider {...settings}>
        {offs.map((off) => (
          <Link href={`/${off.slug}`} key={off.id}>
            <a>
              <div className={styles.sliderItem}>
                <span className={styles.sliderImage}>
                  <Image
                    src={
                      off.image ? off.image.formats.small.url : "/CB-cap.jpg"
                    }
                    alt="Cozy Buddy Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </span>
                <div className={styles.sliderGlass}>
                  <h3>{off.name}</h3>
                  <p>{off.perex}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
