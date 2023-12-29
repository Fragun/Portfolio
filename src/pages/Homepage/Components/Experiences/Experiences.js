import styles from "./Experiences.module.scss";

import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div className={`${styles.containerExperiences}`}>
      <h2>{t("ExperiencesTitle")}</h2>
      
    </div>
  );
}
