import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={`df jcb aic p10 ${styles.footer}`}>
      <p>Copyright 2024 Portfolio avec REACT</p>
      <p>images et icones : line-awesome et <a href="https://www.bing.com/images/create?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=bing-image-creator">bing-image-creator</a></p>
    </div>
  );
}
