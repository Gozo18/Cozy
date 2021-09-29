import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

function MainFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Image src="/CB.svg" alt="Cozy Buddy Logo" width={150} height={25} />
        </a>
      </Link>
    </footer>
  );
}

export default MainFooter;
