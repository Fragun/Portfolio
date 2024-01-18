import React, { useContext } from "react";
import styles from "./Works.module.scss";
import { useTranslation } from "react-i18next";
import { worksTab } from "./components/WorksData";
import { AppContext } from "../../../../context/Context";

export default function Works() {
  const { t } = useTranslation();
  const {hiddenContainerWorks, handleClickTitleWorks} = useContext(AppContext);

  return (
    <div className={`${styles.containerWorks}`}>
      <h2
        onClick={() => {
          handleClickTitleWorks();
        }}
      >
        {t("worksTitle")} 
      </h2>
      <div className={`${!hiddenContainerWorks ? styles.hiddenContainer : ""}`}>
        <div className={`${styles.grid} `}>
          {worksTab.map((w) => (
            <article key={w.id} className="tac mt20">
              <a href={w.address}>
                <h3>{t(w.title)}</h3>
                <img
                  src={w.img}
                  alt={w.alt}
                  className={`${styles.imageWork}`}
                ></img>
                <p>{t(w.description)}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
