import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import styles from "../../styles/Header.module.scss";

function MainHeader() {
  return (
    <header className={styles.container}>
      <div>
        <Link href="/">
          <a>
            <Image
              src="/CB.svg"
              alt="Cozy Buddy Logo"
              width={300}
              height={50}
            />
          </a>
        </Link>
      </div>
      <nav className={styles.links}>
        <span>
          <IoHomeOutline />
          <span>Domů</span>
        </span>
        <span>
          <IoAlbumsOutline />
          <span>Naše práce</span>
        </span>
        <span>
          <IoPersonOutline />
          <span>Kontakty</span>
        </span>
      </nav>
    </header>
  );
}

export default MainHeader;
