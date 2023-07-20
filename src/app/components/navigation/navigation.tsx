import Link from "next/link";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"} data-cy="nav-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} data-cy="nav-about-link">
            About
          </Link>
        </li>
        <li>
          <Link href={"/projects"} data-cy="nav-projects-link">
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/contact"} data-cy="nav-contact-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
