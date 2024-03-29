import AboutMe from "./Components/AboutMe/AboutMe";
import styles from "./Homepage.module.scss";
import { useTranslation } from "react-i18next";
import Education from "./Components/Education/Education";
import Header from "../../components/Header/Header";
import Experiences from "./Components/Experiences/Experiences";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import photoMoi from "../../assets/image/DavidD.png"

export default function Homepage() {
  const { t } = useTranslation();

  return (
    <>
      <header className={``}>
        <Header />
        <article className={`df jcc ${styles.container}`}>
          <div className={`df fc jcc tal ${styles.presentation} `}>
            <p className={`${styles.firstname}`}>{t("presentation")}</p>
            <p className={`${styles.name}`}>{t("presentationName")}</p>
            <p className={`${styles.firstname}`}>{t("presentation2")}</p>
          </div>
          <img src={photoMoi} alt="David Dethoor"></img>
        </article>
      </header>
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="training">
          <Education />
        </section>
        <section id="exp">
          <Experiences />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
