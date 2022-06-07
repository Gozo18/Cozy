import Image from "next/image";
import { IoPencilSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import DetailGallery from "@/components/DetailGallery";

import styles from "@/styles/Detail.module.scss";

export default function Detail({ creation }) {
  const router = useRouter();

  return (
    <div>
      <span className={styles.detailImage}>
        <Image
          src={creation.image ? creation.image.url : "/CB-cap.jpg"}
          alt='Cozy Buddy'
          layout='fill'
          objectFit='cover'
        />
      </span>
      <div className={styles.container}>
        <div className={styles.subNav}>
          <div onClick={() => router.back()} className={styles.backButton}>
            {"<"} Zpět
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.detailText}>
          <h3>{creation.name}</h3>
          <p>{creation.perex}</p>
        </div>
        {/* <div className={styles.detailGallery}>
          {creation.gallery.map((img) => (
            <span className={styles.detailGalleryImage} key={img.id}>
              <Image
                src={img.url}
                alt='Cozy Buddy'
                layout='fill'
                objectFit='cover'
              />
            </span>
          ))}
        </div> */}
        <DetailGallery pics={creation.gallery} />
      </div>
    </div>
  );
}

/* export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/offers`);
  const offers = await res.json();

  const paths = offers.map((offer) => ({
    params: { slug: offer.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/offers?slug=${slug}`);
  const offers = await res.json();

  return {
    props: {
      creation: offers[0],
    },
    revalidate: 1,
  };
} */

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/offers?slug=${slug}`);
  const offers = await res.json();

  return {
    props: {
      creation: offers[0],
    },
  };
}
