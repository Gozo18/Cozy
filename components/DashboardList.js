import Image from "next/image";
import { IoPencilSharp, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

import styles from "@/styles/DashboardList.module.scss";

export default function DashboardList({ cre, handleDelete }) {
  return (
    <div className={styles.creation}>
      <h4>
        <Link href={`/nase-prace/${cre.slug}`}>
          <a>{cre.name}</a>
        </Link>
      </h4>
      <Link href={`/nase-prace/edit/${cre.id}`}>
        <a className={styles.edit}>
          <IoPencilSharp />
          Upravit
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(cre.id)}
      >
        <IoCloseSharp /> Smazat
      </a>
    </div>
  );
}
