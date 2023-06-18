//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.homeIntro}>
        <h1 className={styles.myName}>Sabrina Samuel</h1>
        <h2 className={styles.tagline}>
          Navigating my way through web development
        </h2>
        <p className={styles.introSummary}>
          I am a Software Engineer. My skills are mainly frontend development,
          specifically React.JS, though I am expanding beyond this.
        </p>
      </header>
    </div>
  );
}
