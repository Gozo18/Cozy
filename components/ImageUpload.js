import { useState } from "react";
import { API_URL } from "@/config/index";
import styles from "@/styles/AddNew.module.scss";

export default function ImageUpload({
  creId,
  imageUploaded,
  imageGalleryUploaded,
  token,
}) {
  const [image, setImage] = useState(null);

  const [gallery, setGallery] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "creations");
    formData.append("refId", creId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const uploadGalleryImage = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    formData.append("ref", "creations");
    formData.append("refId", creId);
    formData.append("field", "gallery");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageGalleryUploaded();
    }
  };

  const handleGallerySubmit = async (e) => {
    e.preventDefault();

    const arrayGallery = Array.from(gallery);

    arrayGallery.forEach((file) => {
      uploadGalleryImage(file);
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleGalleryFileChange = (e) => {
    setGallery(e.target.files);
  };

  return (
    <div className={styles.form}>
      <h3>Nahrát obrázek</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className={styles.btn} />
      </form>
      <h3>Nahrát obrázky do galerie</h3>
      <form onSubmit={handleGallerySubmit}>
        <div className={styles.file}>
          <input type="file" multiple onChange={handleGalleryFileChange} />
        </div>
        <input type="submit" value="Upload" className={styles.btn} />
      </form>
    </div>
  );
}
