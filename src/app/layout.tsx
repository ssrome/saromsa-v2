import "./globals.css";
import styles from "./layout.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaRomSa",
  description:
    "The online portfolio of front-end developer, Sabrina Samuel. Showcasing web development projects and skills.",
  keywords:
    "HTML, CSS, JavaScript, JS, ReactJS, SaRomSa, React, London, web, front end, web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <header>Header</header>
          <nav>Navigation</nav>
          <div className={styles.main}>{children}</div>

          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
