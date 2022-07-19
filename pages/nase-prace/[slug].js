import Image from "next/image";

import styles from "@/styles/Detail.module.scss";

import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import DetailGallery from "@/components/DetailGallery";

export default function Detail({ creation }) {
  const router = useRouter();

  return (
    <div className={styles.detailBox}>
      {/* <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      /> */}
      <span className={styles.detailImage}>
        <Image
          src={
            creation.image ? creation.image.formats.large.url : "/CB-cap.jpg"
          }
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
          <h1>{creation.name}</h1>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: creation.description }}
          ></div>
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
        <DetailGallery pics={creation.gallery} name={creation.name} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/creations`);
  const creations = await res.json();

  const paths = creations.map((creation) => ({
    params: { slug: creation.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/creations?slug=${slug}`);
  const creations = await res.json();

  return {
    props: {
      creation: creations[0],
    },
    revalidate: 1,
  };
}

/* export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/creations?slug=${slug}`);
  const creations = await res.json();

  return {
    props: {
      creation: creations[0],
    },
  };
} */
