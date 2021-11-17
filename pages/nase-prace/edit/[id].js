import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";
import Image from "next/image";
import { IoImageSharp } from "react-icons/io5";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import { parseCookies } from "@/helpers/index";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import styles from "@/styles/AddNew.module.scss";

export default function EditCreatinPage({ cre, token }) {
  const [values, setValues] = useState({
    name: cre.name,
    description: cre.description,
    date: cre.date,
  });

  const [imagePreview, setImagePreview] = useState(
    cre.image ? cre.image.formats.thumbnail.url : null
  );

  const [imageGalleryPreview, setImageGalleryPreview] = useState(
    cre.gallery.length > 0 ? cre.gallery : null
  );

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Vyplňte všechna pole!", {
        theme: "colored",
      });
    }

    const res = await fetch(`${API_URL}/creations/${cre.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Není správný token.", {
          theme: "colored",
        });
        return;
      }
      toast.error("Něco se pokazilo.", {
        theme: "colored",
      });
    } else {
      const cre = await res.json();
      router.push(`/nase-prace/${cre.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/creations/${cre.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  const imageGalleryUploaded = async (e) => {
    const res = await fetch(`${API_URL}/creations/${cre.id}`);
    const data = await res.json();
    setImageGalleryPreview(data.gallery);
    setShowModal(false);
    console.log(data);
  };

  if (!showModal) {
    document.querySelector("body").style.overflow = "visible";
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }

  return (
    <div className={styles.container}>
      <Link href="/nase-prace">
        <a>{"<"} Zpět</a>
      </Link>
      <h1>Upravit práci</h1>

      <form onSubmit={handlerSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Název práce</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Datum</label>
            <input
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Popis práce</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Upravit práci" className={styles.btn} />
      </form>
      <h2>Náhled obrázku</h2>
      {imagePreview ? (
        <span>
          <Image src={imagePreview} height={100} width={170} />
        </span>
      ) : (
        <div>
          <p>Není nahraný žádný obrázek</p>
        </div>
      )}
      <div>
        <button
          className={styles.loadImageButton}
          onClick={() => setShowModal(true)}
        >
          <IoImageSharp /> Nahrát obrázek
        </button>
      </div>

      <h2>Náhled galerie</h2>
      {imageGalleryPreview ? (
        imageGalleryPreview.map((img) => (
          <span className={styles.detailGalleryImage} key={img.id}>
            <Image src={img.formats.small.url} height={100} width={170} />
          </span>
        ))
      ) : (
        <div>
          <p>Není nahraný žádný obrázek</p>
        </div>
      )}
      <div>
        <button
          className={styles.loadImageButton}
          onClick={() => setShowModal(true)}
        >
          <IoImageSharp /> Nahrát obrázky
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          creId={cre.id}
          imageUploaded={imageUploaded}
          imageGalleryUploaded={imageGalleryUploaded}
          token={token}
        />
      </Modal>

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
    </div>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/creations/${id}`);
  const cre = await res.json();

  console.log(req.headers.cookie);

  return {
    props: {
      cre,
      token,
    },
  };
}
