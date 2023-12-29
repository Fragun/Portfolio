import styles from "./MobileMenu.module.scss";
import React from "react";
import {
  BriefcaseIcon,
  ClipboardIcon,
  EnvelopeIcon,
  GraduationCapIcon,
  MaleIcon,
} from "react-line-awesome";
import en from "../../../assets/image/united-kingdom.png";
import fr from "../../../assets/image/france.png";
import { useTranslation } from "react-i18next";

export default function MobileMenu() {
  const { i18n } = useTranslation();

  return (
    <nav className={`${styles.navMobile} `}>
      <ul className={`df jce aie`}>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#about" className={``}>
            <MaleIcon component="span"></MaleIcon>
          </a>
        </li>
        <li className={`mr10  ${styles.buttonMobileMenu}`}>
          <a href="/#cv" className={``}>
            <ClipboardIcon
              className={`${styles.customClass}`}
              component="span"
            ></ClipboardIcon>{" "}
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#studies" className={``}>
            <GraduationCapIcon component="span"></GraduationCapIcon>
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#studies" className={``}>
            <BriefcaseIcon component="span"></BriefcaseIcon>
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMobileMenu}`}>
          <a href="/#studies" className={``}>
            <EnvelopeIcon component="span"></EnvelopeIcon>
          </a>
        </li>
        <li>
          <a onClick={() => i18n.changeLanguage("en")}>
            <img src={en} alt="change language english"></img>
          </a>
          <a onClick={() => i18n.changeLanguage("fr")}>
            <img src={fr} alt="change language français"></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}
