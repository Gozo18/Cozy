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
        <Link href="/">
          <a>
            <IoHomeOutline />
            <span>Domů</span>
          </a>
        </Link>
        <Link href="/naseprace">
          <a>
            <IoAlbumsOutline />
            <span>Naše práce</span>
          </a>
        </Link>
        <Link href="/kontakty">
          <a>
            <IoPersonOutline />
            <span>Kontakty</span>
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
