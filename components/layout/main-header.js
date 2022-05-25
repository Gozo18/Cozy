import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoHomeOutline } from "react-icons/io5";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import styles from "@/styles/Header.module.scss";

function MainHeader() {
  const router = useRouter();

  return (
    <header
      className={
        (router.pathname === "/nase-prace/[slug]") |
        (router.pathname === "/[slug]")
          ? styles.containerJobs
          : styles.container
      }
    >
      <div
        className={
          (router.pathname === "/nase-prace/[slug]") |
          (router.pathname === "/[slug]")
            ? styles.logoJobs
            : styles.logo
        }
      >
        <Link href='/'>
          <a>
            <Image
              src='/CB.svg'
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
