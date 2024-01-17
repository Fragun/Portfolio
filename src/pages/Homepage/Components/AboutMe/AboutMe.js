import styles from "./AboutMe.module.scss";
import MyCv from "../../../../components/CvComponent/MyCv";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../../../context/Context";

export default function AboutMe() {
  const [showCv, setShowCv] = useState(false);
  const { t } = useTranslation();
  const { hiddenContainerAboutMe, handleClickContainerHiddenAboutMe } = useContext(AppContext);

  const handleClick = () => {
    setShowCv(!showCv);
  };
  
  return (
    <div>
      <h2
        className={`${styles.title}`}
        onClick={() => {
          handleClickContainerHiddenAboutMe();
        }}
      >
        {t("aboutMe")}
      </h2>
      <div className={`${styles.container}`}>
        <article
          className={`${styles.containerAboutme} ${
            hiddenContainerAboutMe ? "" : styles.hiddenContainer
          }`}
        >
          <p>{t("p1AboutMe")}</p>
          <p>{t("p2AboutMe")}</p>
          <p>{t("p3AboutMe")}</p>
          <p>{t("p4AboutMe")}</p>
          <ul>
            <li className="ml10">&nbsp; {t("p5AboutMe")}</li>
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
          <a href="#contact">{t("p10AboutMe")}{" "}</a>
          
          
        </article>
      </div>
    </div>
  );
}
