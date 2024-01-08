import styles from "./MobileMenu.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHandshake,
  faEnvelope,
  faGraduationCap,
  faBriefcase,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import en from "../../../assets/image/united-kingdom.png";
import fr from "../../../assets/image/france.png";
import { useTranslation } from "react-i18next";

export default function MobileMenu() {
  const { i18n } = useTranslation();

  return (
    <nav className={`${styles.navMobile} `}>
      <ul className={`df jce aic`}>
        <li className={`${styles.buttonMobileMenu}`}>
          <a href="/#about" className={``}>
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </li>
        <li className={`mr10  ${styles.buttonMobileMenu}`}>
          {/* <a href="/#cv" className={``}>
          </a> */}
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#studies" className={``}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </a>
        </li>

        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#studies" className={``}>
            <FontAwesomeIcon icon={faHandshake} />
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#studies" className={``}>
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
