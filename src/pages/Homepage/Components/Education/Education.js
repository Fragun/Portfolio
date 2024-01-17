import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Education.module.scss";
import useOnScreen from "../../../../components/Hook/useOnScreen";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../../../context/Context";

export default function Education() {
  const { t } = useTranslation();

  const boxRef = useRef(null);
  const isBoxVisible = useOnScreen(boxRef);
  const [hasAnimated, setHasAnimated] = useState(false);
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
  const { handleClickTitleEducation, hiddenContainerEducation } =
    useContext(AppContext);

  useEffect(() => {
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
    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, [hasAnimated, hasAnimated2, hasAnimated3, hasAnimated4, hasAnimated5]);

  return (
    <div
      className={`${styles.containerEducation}`}
      onClick={handleClickTitleEducation}
    >
      <h2>{t("trainingTitle")}</h2>
      <div
        className={`${styles.timelineBox} ${
          hiddenContainerEducation ? "" : styles.hiddenContainer
        }`}
      >
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
          <h3>{t("titleMaster")}</h3>
          <p>{t("pMaster")}</p>
        </div>
        <div className={`${styles.box} ${styles.b2}`}>
          <h3>{t("titleCda")}</h3>
          <p>{t("pCda")}</p>
        </div>
        <div className={`${styles.box} ${styles.b3}`}>
          <h3>{t("titleDwwm")}</h3>
          <p>{t("pDwwm")}</p>
        </div>
        <div className={`${styles.box} ${styles.b4}`}>
          <h3>{t("titleDut")}</h3>
          <p>{t("pDut")}</p>
        </div>
        <div className={`${styles.box} ${styles.b5}`}>
          <h3>{t("titleBac")}</h3>
          <p>{t("pBac")}</p>
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
