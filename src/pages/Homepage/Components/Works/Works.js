import React, { useState } from "react";
import styles from "./Works.module.scss";
import { useTranslation } from "react-i18next";
import { worksTab } from "./components/WorksData";

export default function Works() {
  const { t } = useTranslation();
  const [hiddenContainer, setHiddenContainer] = useState(false);

  const handleClickHiddenContainer = () => {
    setHiddenContainer(!hiddenContainer);
  };

  return (
    <div className={`${styles.containerWorks}`}>
      <h2
        onClick={() => {
          handleClickHiddenContainer();
        }}
      >
        {t("worksTitle")}
      </h2>
      <div className={`${!hiddenContainer ? styles.hiddenContainer : ""}`}>
        <div className={`${styles.grid} `}>
          {worksTab.map((w) => (
            <article key={w.id} className="tac mt20">
              <a href={w.address}>
                <h3>{w.title}</h3>
                <img
                  src={w.img}
                  alt={w.alt}
                  className={`${styles.imageWork}`}
                ></img>
                <p>{w.description}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
