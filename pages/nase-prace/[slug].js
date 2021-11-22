import Image from "next/image";
import { IoPencilSharp, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

import styles from "@/styles/Detail.module.scss";

import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Detail({ creation }) {
  const router = useRouter();

  /* const deleteEvent = async (e) => {
    if (confirm("Jste si jistí?")) {
      const res = await fetch(`${API_URL}/creations/${cre.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message, {
          theme: "colored",
        });
      } else {
        router.push("/nase-prace");
      }
    }
  }; */

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.subNav}>
          <div onClick={() => router.back()} className={styles.backButton}>
            {"<"} Zpět
          </div>
          {/* <div className={styles.controls}>
            <Link href={`/nase-prace/edit/${creation.id}`}>
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
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <span className={styles.detailImage}>
        <Image
          src={creation.image ? creation.image.url : "/CB-cap.jpg"}
          alt="Cozy Buddy"
          layout="fill"
          objectFit="contain"
        />
      </span>
      <div className={styles.container}>
        <div className={styles.detailText}>
          <h1>{creation.name}</h1>
          <p>{creation.description}</p>
        </div>
        <div className={styles.detailGallery}>
          {creation.gallery.map((img) => (
            <span className={styles.detailGalleryImage} key={img.id}>
              <Image
                src={img.url}
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
