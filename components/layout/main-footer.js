import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

import styles from "@/styles/Footer.module.scss";

function MainFooter() {
  const { user, logout } = useContext(AuthContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* <Link href='/'>
          <a>
            <Image
              src='/CB.svg'
              alt='Cozy Buddy Logo'
              width={300}
              height={50}
            />
          </a>
        </Link> */}

        {user ? (
          <>
            {/* If logged in */}
            <Link href='/nase-prace/nova'>
              <a className={styles.addLink}>Přidat novou práci</a>
            </Link>
            <Link href='/account/dashboard'>
              <a className={styles.addLink}>Dashboard</a>
            </Link>
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
              className={styles.addLink}
            >
              Odhlásit
            </a>
            <p>© 2022 cozy buddy</p>
          </>
        ) : (
          <div className={styles.notLogged}>
            <p>© 2022 cozy buddy</p>
            {/* If logged out */}
            <Link href='/account/login'>
              <a>Přihlásit se</a>
            </Link>
            {/* <Link href='/account/register'>
              <a className={styles.addLink}>Registrovat se</a>
            </Link> */}
          </div>
        )}
      </div>
    </footer>
  );
}

export default MainFooter;
