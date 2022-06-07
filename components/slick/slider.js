import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Slider.module.scss";

function SimpleSlider({ offers }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
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
      <Slider {...settings}>
        {offers.map((off) => (
          <Link href={`/${off.slug}`} key={off.id}>
            <a>
              <div className={styles.sliderItem}>
                <span className={styles.sliderImage}>
                  <Image
                    src={
                      off.image ? off.image.formats.medium.url : "/CB-cap.jpg"
                    }
                    alt='Cozy Buddy Logo'
                    layout='fill'
                    objectFit='cover'
                    priority
                  />
                </span>
                <div className={styles.sliderGlass}>
                  <h3>{off.name}</h3>
                  {/* <p>{off.perex}</p> */}
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: off.perex }}
                  ></div>
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
