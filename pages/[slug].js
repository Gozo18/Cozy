import Image from "next/image";
import { IoPencilSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

import styles from "@/styles/Detail.module.scss";

import { API_URL } from "@/config/index";
import { useRouter } from "next/router";

export default function Detail(offer) {
  const off = offer.offer;

  const router = useRouter();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.subNav}>
          <div onClick={() => router.back()} className={styles.backButton}>
            {"<"} Zpět
          </div>
          {/* <div className={styles.controls}>
            <Link href={`/nase-prace/edit/${cre.id}`}>
              <a>
                <IoPencilSharp /> Upravit
              </a>
            </Link>
            <a href="#" className={styles.delete} onClick={deleteEvent}>
              <IoCloseSharp /> Smazat
            </a>
          </div> */}
        </div>
      </div>
      <span className={styles.detailImage}>
        <Image
          src={off.image ? off.image.formats.small.url : "/CB-cap.jpg"}
          alt="Cozy Buddy"
          layout="fill"
          objectFit="contain"
        />
      </span>
      <div className={styles.container}>
        <div className={styles.detailText}>
          <h3>{off.name}</h3>
          <p>{off.perex}</p>
        </div>
        <div className={styles.detailGallery}>
          {off.gallery.map((img) => (
            <span className={styles.detailGalleryImage} key={img.id}>
              <Image
                src={img.formats.small.url}
                alt="Cozy Buddy"
                layout="fill"
                objectFit="contain"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
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

/* export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/offers?slug=${slug}`);
  const offers = await res.json();

  return {
    props: {
      offer: offers[0],
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
