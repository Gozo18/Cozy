import Image from "next/image";
import Heading from "../components/Heading";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import styles from "@/styles/Contacts.module.scss";

export default function Ourjobs() {
  return (
    <div className={styles.container}>
      <Heading />
      <div className={styles.contactBox}>
        <div className={styles.contactImageBox}>
          <div className={styles.contactImage}>
            <Image
              src='/misha.png'
              alt='Cozy Buddy'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className={styles.contacts}>
          <div>Michaela Veselská</div>
          <div></div>
          <div>
            <IoLocationOutline />
            adresa:
          </div>
          <div>
            Kpt. Jaroše 6<br /> 692 01 Mikulov
          </div>
          <div>
            <IoCallOutline />
            telefon:
          </div>
          <div>
            <a href='tel:+420721600240'>+420 721 600 240</a>
          </div>
          <div>
            <IoMailOutline />
            e-mail:
          </div>
          <div>
            <a href='mailto:info@cozybuddy.cz'>info@cozybuddy.cz</a>
          </div>
          <div>IČO: 09005374</div>
          <div>Nejsem plátce DPH</div>
        </div>
      </div>
    </div>
  );
}
