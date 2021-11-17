import Link from "next/link";
import { PER_PAGE } from "@/config/index";
import styles from "@/styles/Pagination.module.scss";

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className={styles.paginationBox}>
      {page > 1 && (
        <Link href={`/nase-prace?page=${page - 1}`}>
          <a className={styles.paginationLink}>Předchozí</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/nase-prace?page=${page + 1}`}>
          <a className={styles.paginationLink}>Další</a>
        </Link>
      )}
    </div>
  );
}
