import AboutMe from "./Components/AboutMe/AboutMe";
import photo from "../../assets/image/photoDavidtr-removebg-preview2.png";
import styles from "./Homepage.module.scss";
import { useTranslation } from "react-i18next";
import Education from "./Components/Education/Education";
import Header from "../../components/Header/Header";
import Experiences from "./Components/Experiences/Experiences";
import Works from "./Components/Works/Works";

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
          <div className="df jcc aise">
            <img
              src={photo}
              alt="Profil David Dethoor"
              className={`${styles.imageRounded}`}
            />
          </div>
        </article>
      </header>
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Experiences />
        </section>
        <section>
          <Works />
        </section>

      </main>
    </>
  );
}
