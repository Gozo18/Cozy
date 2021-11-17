import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

import styles from "@/styles/AuthForm.module.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(
    () =>
      error &&
      toast.error(error, {
        theme: "colored",
      })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <h1>Přihlášení</h1>
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Heslo</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Přihlásit se" className={styles.submit} />
        </form>

        <p>
          Nemáte účet? <Link href="/account/register">Registrovat.</Link>
        </p>
      </div>
    </div>
  );
}
