import Link from "next/link";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
