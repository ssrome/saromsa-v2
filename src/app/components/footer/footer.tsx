import styles from "./footer.module.css";

let dateNow = new Date(Date.now());
let currentYear = (date: Date) => {
  return date.getFullYear();
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <small>
        {" "}
        &copy; 2020 - {currentYear(dateNow)} Copyright | All Rights Reserved
      </small>
    </footer>
  );
}

export { Footer, dateNow, currentYear };
