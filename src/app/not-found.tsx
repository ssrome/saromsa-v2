import Link from "next/link";
import { Anton, ZCOOL_QingKe_HuangYou } from "next/font/google";
import styles from "./not-found.module.css";

const zcool = ZCOOL_QingKe_HuangYou({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className={anton.className}>
      <h2 className={styles.errorHeader} data-cy="notFound">
        Not Found
      </h2>
      <div className={zcool.className}>
        <p className={styles.notFoundText}>
          Sorry, the page you`re trying to view does not exist
        </p>
        <p className={styles.notFoundText}>
          Return{" "}
          <Link href="/" data-cy="homeLink">
            home
          </Link>
        </p>
      </div>
    </div>
  );
}
