import styles from "./Experiences.module.scss";
import spinningArrow from "../../../../assets/image/spinner.png";
import brico from "../../../../assets/image/brico.jpg";
import aerol from "../../../../assets/image/aerol.jpg";
import eurofad from "../../../../assets/image/eurofad.jpg";
import merris from "../../../../assets/image/merris.jpg";
import ferme from "../../../../assets/image/ferme.jpg";

import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/Context";

export default function Experiences() {
  const { t } = useTranslation();
  const [isclicked, setIsClicked] = useState(null);
  const { handleClickContainerExperience, hiddenContainerExperience } =
    useContext(AppContext);

  const handleClick = (id) => {
    setIsClicked(isclicked === id ? null : id);
  };

  return (
    <>
      <h2
        className={`${styles.title}`}
        onClick={() => {
          handleClickContainerExperience();
        }}
      >
        {t("experiencesTitle")}
      </h2>
      <div
        className={` ${
          hiddenContainerExperience === true ? styles.hiddenContainer : ""
        }`}
      >
        <div className={`${styles.gridExp}`}>
          <article
            className={`${styles.three}`}
            onClick={() => handleClick("three")}
          >
            <time datetime="2022">2022</time>
            <img src={eurofad} alt="Eurofad"></img>
            <div
              className={`${isclicked === "three" ? styles.textEffect : ""}`}
            >
              <h3>
                {t("eurofad")}
                <br />
                stagiaire
              </h3>
              <p>{t("pEurofad")}</p>
            </div>
          </article>
          <article
            className={`${styles.one}`}
            onClick={() => handleClick("one")}
          >
            <time datetime="2023">2023</time>
            <img src={ferme} alt="ferme"></img>
            <div className={`${isclicked === "one" ? styles.textEffect : ""}`}>
              <h3>
                {t("titleFerme")}
                <br />
                {t("contractFerme")}
              </h3>
              <p>{t("pFerme")}</p>
            </div>
          </article>
          <article
            className={`${styles.five}`}
            onClick={() => handleClick("five")}
          >
            <time datetime="2016-2023">2016-2023</time>
            <img src={brico} alt="Brico dépôt"></img>
            <div className={`${isclicked === "five" ? styles.textEffect : ""}`}>
              <h3>
                {t("titleBrico")}
                <br />
                {t("contractBrico")}
              </h3>
              <p>{t("pBrico")}</p>
            </div>
          </article>
          <article
            className={`${styles.two}`}
            onClick={() => handleClick("two")}
          >
            <time datetime="2014-2016">2014-2016</time>
            <img src={merris} alt="Merris Hydraulique"></img>
            <div className={`${isclicked === "two" ? styles.textEffect : ""}`}>
              <h3>
                {t("titleMerris")}
                <br />
                {t("contractMerris")}
              </h3>
              <p>{t("pMerris")}</p>
            </div>
          </article>
          <div className={`${styles.containerArrow}`}>
            <img
              src={spinningArrow}
              className={`${styles.six}`}
              alt="spinning arrow"
            ></img>
          </div>
          <article
            className={`${styles.four}`}
            onClick={() => handleClick("four")}
          >
            <time datetime="2012-2014">2012-2014</time>
            <img src={aerol} alt="aerol"></img>
            <div className={`${isclicked === "four" ? styles.textEffect : ""}`}>
              <h3>
                {t("titleAEROL")}
                <br />
                {t("contractAEROL")}
              </h3>
              <p>{t("pAEROL")}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
