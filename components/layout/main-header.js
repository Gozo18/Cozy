import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import styles from "@/styles/Header.module.scss";

function MainHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Image
              src='/CBwhite.svg'
              alt='Cozy Buddy Logo'
              layout='fill'
              objectFit='contain'
            />
          </a>
        </Link>
      </div>
      <nav className={styles.links}>
        <Link href='/'>
          <a>
            <IoHomeOutline />
            <span>Domů</span>
          </a>
        </Link>
        <Link href='/nase-prace'>
          <a>
            <IoAlbumsOutline />
            <span>Naše práce</span>
          </a>
        </Link>
        <Link href='/kontakty'>
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
