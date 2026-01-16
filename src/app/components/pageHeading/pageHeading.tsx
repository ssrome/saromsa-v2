import styles from "./pageHeading.module.css";

export function PageHeading({ heading }: any) {
  if (heading) {
    return <h1 className={styles.pageHeading}>{heading}</h1>;
  }
}
