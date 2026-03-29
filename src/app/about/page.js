import { PageHeading } from "../components/pageHeading/pageHeading";
import styles from "./about.module.css";

export default function About() {
  return (
    <div>
      <PageHeading heading="About" />
      <section className={styles.about}>
        I am a Software Engineer for a consultancy primarily working within the
        public sector.
        <br />
        <br />
        My interest in web development has spanned a number of years, which
        included starting up a Wordpress-based site for a local football team
        and one about TV shows. My previous experience, as a Business Analyst,
        gave me the opportunity to absorb information from developers and
        quality engineers to learn about frontend and backend systems and
        technologies.
        <br />
        <br />I have been using{" "}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freeCodeCamp
        </a>{" "}
        and{" "}
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes
        </a>{" "}
        to build up my skills and increase my confidence in coding projects.
        I`ve mainly been concentrating on HTML, CSS, JavaScript and React.JS.
        These resources have provided me the opportunity to learn, while having
        a full time job. When I`m not working or coding you can find me watching
        various sports. I had recently caught the travelling bug so, at times, I
        have found myself at various events: the Ice Skating World Championship,
        the French Open, the FIFA Women`s World Cup. I have even been to
        Eurovision, when Portugal held it in Lisbon. I love being able to switch
        on my laptop and learn something at any time of the day, in any place.
        <br />
        <br />
        <h3>Credits:</h3>
        <ul className={styles.creditsList}>
          <li className={styles.creditsListItem}>
            <a
              href="https://devicon.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devicon
            </a>
          </li>
          <li className={styles.creditsListItem}>
            <a
              href="https://fontawesome.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Font Awesome
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
