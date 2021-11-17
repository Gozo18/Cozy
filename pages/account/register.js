import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

import styles from "@/styles/AuthForm.module.scss";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(
    () =>
      error &&
      toast.error(error, {
        theme: "colored",
      })
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Hesla se neshodují!", {
        theme: "colored",
      });
      return;
    }
    register({ username, email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <h1>Registrace</h1>
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
            <label htmlFor="username">Jméno</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div>
            <label htmlFor="passwordConfirm">Heslo znovu</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Zaregistrovat se"
            className={styles.submit}
          />
        </form>

        <p>
          Už máte účet? <Link href="/account/login">Přihlásit.</Link>
        </p>
      </div>
    </div>
  );
}
