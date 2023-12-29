import styles from "./Header.module.scss";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AngleDoubleDownIcon,
  AngleDoubleUpIcon,
  BriefcaseIcon,
  ClipboardIcon,
  EnvelopeIcon,
  GraduationCapIcon,
  MaleIcon,
} from "react-line-awesome";
import en from "../../assets/image/united-kingdom.png";
import fr from "../../assets/image/france.png";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);
  const [showIcon, setShowIcon] = useState(false);

  /**
   * écouteur d'évènement permettant d'obtenir la position du défilement vertical
   * scrolled est mis à true seulement si 'offset' > 100
   */
  const handleScroll = () => {
    const offset = window.scrollY;
    //console.log(offset);
    setScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (count === 0) {
      setShowMobileMenu(true);
      setShowIcon(true);
      setCount(count + 1);
    } else {
      setShowMobileMenu(false);
      setShowIcon(false);
      setCount(0);
    }
  };

  return (
    <nav className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <ul className={`${styles.desktopHeader}  df jce aic`}>
        <li className={`mr10  ${styles.buttonMenu}`}>
          <ClipboardIcon className={`${styles.customClass}`} component="span">
            <a href="/#cv" className={`${scrolled ? styles.scrolled : ""}`}>
              <span> {t("personalResume")}</span>
            </a>
          </ClipboardIcon>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <MaleIcon component="span">
            <a href="/#about" className={`${scrolled ? styles.scrolled : ""}`}>
              <span> {t("about")}</span>
            </a>
          </MaleIcon>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <GraduationCapIcon component="span">
            <a
              href="/#studies"
              className={`${scrolled ? styles.scrolled : ""}`}
            >
              <span> {t("training")}</span>
            </a>
          </GraduationCapIcon>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <BriefcaseIcon component="span" >
            <a
              href="/#studies"
              className={`${scrolled ? styles.scrolled : ""}`}
            >
              <span> {t("works")}</span>
            </a>
          </BriefcaseIcon>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <EnvelopeIcon component="span">
            <a
              href="/#studies"
              className={`${scrolled ? styles.scrolled : ""}`}
            >
              <span> {t("contact")}</span>
            </a>
          </EnvelopeIcon>
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
      <section className="df jcfe">
        <div className={`${styles.mobileMenu}`}>
          {showMobileMenu && <MobileMenu />}
        </div>

        {!showIcon && (
          <div className={`${styles.listIconMobileMenu} mt10`}>
            <AngleDoubleDownIcon component="span" onClick={handleClick}>
              <span></span>
            </AngleDoubleDownIcon>
          </div>
        )}

        {showIcon && (
          <div className={`${styles.listIconMobileMenu} mt10`}>
            <AngleDoubleUpIcon component="span" onClick={handleClick}>
              <span></span>
            </AngleDoubleUpIcon>
          </div>
        )}
      </section>
    </nav>
  );
}
