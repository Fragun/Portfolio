import { useEffect, useRef, useState } from "react";
import styles from "./Education.module.scss";
import useOnScreen from "../../../../components/Hook/useOnScreen";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const boxRef = useRef(null);
  const isBoxVisible = useOnScreen(boxRef);
  //console.log('==================isBoxVisible==================');
  //console.log(isBoxVisible);
  //console.log('=================hasAnimated===================');
  const [hasAnimated, setHasAnimated] = useState(false);
  //console.log(hasAnimated);
  const box2Ref = useRef(null);
  const isBox2Visible = useOnScreen(box2Ref);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const box3Ref = useRef(null);
  const isBox3Visible = useOnScreen(box3Ref);
  const [hasAnimated3, setHasAnimated3] = useState(false);
  const box4Ref = useRef(null);
  const isBox4Visible = useOnScreen(box4Ref);
  const [hasAnimated4, setHasAnimated4] = useState(false);
  const box5Ref = useRef(null);
  const isBox5Visible = useOnScreen(box5Ref);
  const [hasAnimated5, setHasAnimated5] = useState(false);
  const [hiddenContainer, setHiddenContainer] = useState(false);

  const handleAnimation = () => {
    if (isBoxVisible && !hasAnimated) {
      setHasAnimated(true);
    }
    if (isBox2Visible && !hasAnimated2) {
      setHasAnimated2(true);
    }
    if (isBox3Visible && !hasAnimated3) {
      setHasAnimated3(true);
    }
    if (isBox4Visible && !hasAnimated4) {
      setHasAnimated4(true);
    }
    if (isBox5Visible && !hasAnimated5) {
      setHasAnimated5(true);
    }
  };

  const handleClickTitle = () => {
    setHiddenContainer(!hiddenContainer)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, [hasAnimated, hasAnimated2, hasAnimated3, hasAnimated4, hasAnimated5]);

  return (
    <div className={`${styles.containerEducation}`} onClick={() => {handleClickTitle()}}>
      <h2>{t("trainingTitle")}</h2>
      <div className={`${styles.timelineBox} ${hiddenContainer ? "" : styles.hiddenContainer}`}>
        <div className={`${styles.line}`}></div>
        <div className={`${styles.circle} ${styles.c1}`}>
          <span
            ref={boxRef}
            className={`${isBoxVisible && !hasAnimated ? styles.fadeInUp : ""}`}
          >
            &#128640;
          </span>
        </div>
        <div className={`${styles.circle} ${styles.c2}`}>
          <span
            ref={box2Ref}
            className={`${
              isBox2Visible && !hasAnimated2 ? styles.fadeInUp : ""
            }`}
          >
            &#128187;
          </span>
        </div>
        <div className={`${styles.circle} ${styles.c3}`}>
          <span
            ref={box3Ref}
            className={`${
              isBox3Visible && !hasAnimated3 ? styles.fadeInUp : ""
            }`}
          >
            &#128188;
          </span>
        </div>
        <div className={`${styles.circle} ${styles.c4}`}>
          <span
            ref={box4Ref}
            className={`${
              isBox4Visible && !hasAnimated4 ? styles.fadeInUp : ""
            }`}
          >
            &#127891;
          </span>
        </div>
        <div className={`${styles.circle} ${styles.c5}`}>
          <span
            ref={box5Ref}
            className={`${
              isBox5Visible && !hasAnimated5 ? styles.fadeInUp : ""
            }`}
          >
            &#128210;
          </span>
        </div>
        <div className={`${styles.box} ${styles.b1} `}>
          <h3>Mastère Expert en ingénierie logicielle niveau 7 RNCP</h3>
          <p>
            Alternance 4/5 jours d'entreprise. Utilisation avancé de github et
            gitlab · méthodologie scrum · Javascript · Typescript · Angular ·
            Java, spring · hibernate · docker · kubernetes · Kotlin · API REST
            avec Spring Boot · SOLID · UML · Java · Scala · noSql · test
            d’application et machine learning.
          </p>
        </div>
        <div className={`${styles.box} ${styles.b2}`}>
          <h3>
            Certification Concepteur développeur d'application niveau 6 RNCP
          </h3>
          <p>
            React · Express · Node.js · HTML · CSS · Git · Github · Gitlab ·
            Firebase, Heroku · API Google · Api REST · AWS
          </p>
        </div>
        <div className={`${styles.box} ${styles.b3}`}>
          <h3>Certification développeur web et web mobile niveau 5 RNCP</h3>
          <p>
            GitHub · WordPress · Git · SQL · PhpMyAdmin · API REST · Angular ·
            Framework Symfony · JavaScript · Feuilles de style en cascade (CSS)
            · HTML5 · PHP
          </p>
        </div>
        <div className={`${styles.box} ${styles.b4}`}>
          <h3>D.U.T techniques de commercialisation</h3>
          <p>
            Marketing et Communication · Gestion Commerciale : Compétences en
            gestion des ventes · analyse des performances commerciales · mise en
            place de plans d'action pour atteindre les objectifs. Négociation et
            Vente · techniques de vente · gestion de la relation client · Droit
            Commercial · économie · gestion financière · Informatique :
            Découverte de HTML4.
          </p>
        </div>
        <div className={`${styles.box} ${styles.b5}`}>
          <h3>Bac Sciences et techniques de la gestion</h3>
          <p>Spécialité Marketing</p>
        </div>

        <div className={`${styles.date} ${styles.d1}`}>
          <span>2024-2026</span>
        </div>
        <div className={`${styles.date} ${styles.d2}`}>
          <span>2023</span>
        </div>
        <div className={`${styles.date} ${styles.d3}`}>
          <span>2022</span>
        </div>
        <div className={`${styles.date} ${styles.d4}`}>
          <span>2012</span>
        </div>
        <div className={`${styles.date} ${styles.d5}`}>
          <span>2009</span>
        </div>

        <div className={`${styles.status} ${styles.s1}`}>
          <span>&#129310;</span>
        </div>
        <div className={`${styles.status} ${styles.s2}`}>
          <span>&#128077;</span>
        </div>
        <div className={`${styles.status} ${styles.s3}`}>
          <span>&#128077;</span>
        </div>
        <div className={`${styles.status} ${styles.s4}`}>
          <span>&#128077;</span>
        </div>
        <div className={`${styles.status} ${styles.s5}`}>
          <span>&#128077;</span>
        </div>
      </div>
    </div>
  );
}
