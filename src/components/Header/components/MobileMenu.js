import styles from "./MobileMenu.module.scss";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHandshake,
  faEnvelope,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import en from "../../../assets/image/united-kingdom.png";
import fr from "../../../assets/image/france.png";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../../context/Context";

export default function MobileMenu() {
  const { i18n } = useTranslation();
  const {handleClickContainerHiddenAboutMe, handleClickTitleEducation, handleClickContainerExperience, handleClickHiddenContainerWorks} = useContext(AppContext);

  return (
    <nav className={`${styles.navMobile} `}>
      <ul className={`df jcc aic`}>
        <li className={`${styles.buttonMobileMenu}`}>
          <a href="/#about" className={``}  onClick={handleClickContainerHiddenAboutMe}>
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#training" className={``} onClick={handleClickTitleEducation}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </a>
        </li>

        <li className={`mr10 ${styles.buttonMobileMenu}`} onClick={handleClickContainerExperience}>
          <a href="/#exp" className={``}>
            <FontAwesomeIcon icon={faHandshake} />
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`} onClick={handleClickHiddenContainerWorks}>
          <a href="/#works" className={``}>
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#contact" className={``}>
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <div className="df jcc aic">
          <div onClick={() => i18n.changeLanguage("en")}>
            <img src={en} alt="change language english"></img>
          </div>
          <div onClick={() => i18n.changeLanguage("fr")}>
            <img src={fr} alt="change language français"></img>
          </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
