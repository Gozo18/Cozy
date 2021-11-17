import { parseCookies } from "@/helpers/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import styles from "@/styles/AddNew.module.scss";

export default function AddCreatinPage({ token }) {
  const [values, setValues] = useState({
    name: "",
    description: "",
    date: "",
  });

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

    const res = await fetch(`${API_URL}/creations`, {
      method: "POST",
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

  return (
    <div className={styles.container}>
      <Link href="/nase-prace">
        <a>{"<"} Zpět</a>
      </Link>
      <h1>Přidat novou práci</h1>

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
        <input type="submit" value="Přidat práci" className={styles.btn} />
      </form>
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

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
