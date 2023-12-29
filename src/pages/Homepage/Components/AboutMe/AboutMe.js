import styles from "./AboutMe.module.scss";
import MyCv from "../../../../components/CvComponent/MyCv";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const [showCv, setShowCv] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setShowCv(!showCv);
  };

  return (
    <article className={`${styles.containerAboutme}`}>
      <h2>{t("aboutMe")}</h2>
      <p>{t("p1AboutMe")}</p>
      <p>{t("p2AboutMe")}</p>
      <p>{t("p3AboutMe")}</p>
      <p>{t("p4AboutMe")}</p>
      <ul>
        <li className="ml10">
          &nbsp; {t("p5AboutMe")}
        </li>
        <li className="ml10">
            <span>&nbsp; {t("p6AboutMe")}</span>
        </li>
        <li className="ml10">
            <span>&nbsp; {t("p7AboutMe")}</span>
        </li>
      </ul>
      <p>{t("p8AboutMe")}</p>
      <p>
        {t("p9AboutMe")}{" "}
        <i onClick={handleClick} className={`${styles.buttonCv}`} id="cv">
          {t("p9bisAboutMe")}
        </i>{" "}
      </p>
      {showCv && <MyCv />}
      <p>
        Je vous propose de me recontacter ici afin d’échanger sur cette
        opportunité.
      </p>
    </article>
  );
}
