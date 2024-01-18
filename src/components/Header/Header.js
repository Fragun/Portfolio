import styles from "./Header.module.scss";
import React, { useEffect, useState, useContext} from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHandshake,
  faEnvelope,
  faGraduationCap,
  faBriefcase,
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";
import en from "../../assets/image/united-kingdom.png";
import fr from "../../assets/image/france.png";
import MobileMenu from "./components/MobileMenu";
import { AppContext } from "../../context/Context";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  const {handleClickContainerHiddenAboutMe, handleClickTitleEducation, handleClickContainerExperience, handleClickHiddenContainerWorks} = useContext(AppContext);

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
        <li className={`mr10 ${styles.buttonMenu}`}>
          <FontAwesomeIcon icon={faCoffee} />
          <a
          className={`${scrolled ? styles.scrolled : ""}`}
            href="/#about"
            onClick={handleClickContainerHiddenAboutMe}
          >
            <span> {t("about")}</span>
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <a href="/#training" className={`${scrolled ? styles.scrolled : ""}`} onClick={handleClickTitleEducation}>
            <span> {t("training")}</span>
          </a>
        </li>
        <li className={`mr10  ${styles.buttonMenu}`}>
          <div className={`${styles.customClass}`}>
            <FontAwesomeIcon icon={faBriefcase} />
            <a href="/#exp" className={`${scrolled ? styles.scrolled : ""}`} onClick={handleClickContainerExperience}>
              <span> {t("experiences")}</span>
            </a>
          </div>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <FontAwesomeIcon icon={faHandshake} />
          <a href="/#works" className={`${scrolled ? styles.scrolled : ""}`} onClick={handleClickHiddenContainerWorks}>
            <span> {t("works")}</span>
          </a>
        </li>
        <li className={`mr10 ${styles.buttonMenu}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="/#contact" className={`${scrolled ? styles.scrolled : ""}`}>
            <span> {t("contact")}</span>
          </a>
        </li>
        <li className="df fr">
          <div onClick={() => i18n.changeLanguage("en")}>
            <img src={en} alt="change language english"></img>
          </div>
          <div onClick={() => i18n.changeLanguage("fr")}>
            <img src={fr} alt="change language français"></img>
          </div>
        </li>
      </ul>
      <section className="df jcfe">
        <div className={`${styles.mobileMenu}`}>
          {showMobileMenu && <MobileMenu />}
        </div>

        {!showIcon && (
          <div className={`${styles.listIconMobileMenu} aic mb5`}>
            <div onClick={handleClick}>
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
        )}

        {showIcon && (
          <div className={`${styles.listIconMobileMenu} aic`}>
            <div onClick={handleClick}>
              <FontAwesomeIcon icon={faAnglesUp} />
            </div>
          </div>
        )}
      </section>
    </nav>
  );
}
