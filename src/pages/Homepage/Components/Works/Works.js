import styles from "./Works.module.scss";
import { useTranslation } from "react-i18next";
import { worksTab } from "./components/WorksData";

export default function Works() {
  const { t } = useTranslation();

  return (
    <div className={`${styles.containerWorks}`}>
      <h2>{t("worksTitle")}</h2>
      <div className={`${styles.grid}`}>
      {worksTab.map((w) => (
        
          <article key={w.id} className="tac mt20">
            <a href={w.address} >
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
      <a href="https://www.freepik.com/">Designed by Layerace / Freepik</a>
       </div>
    </div>
  );
}
