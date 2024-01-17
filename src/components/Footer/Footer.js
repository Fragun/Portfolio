import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export default function Footer() {

  const {t} = useTranslation();

  return (
    <div className={`df jcb aic p10 ${styles.footer}`}>
      <p className="ml20">{t("footer1")}<br/>{t("footer2")}</p>
      <p>{t("footer3")}</p>
      <p><a href="https://www.bing.com/images/create?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=bing-image-creator">bing-image-creator</a></p>
    </div>
  );
}
