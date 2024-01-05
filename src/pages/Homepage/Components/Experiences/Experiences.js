import styles from "./Experiences.module.scss";
import spinningArrow from "../../../../assets/image/spinner.png";
import brico from "../../../../assets/image/brico.jpg";
import aerol from "../../../../assets/image/aerol.jpg";
import eurofad from "../../../../assets/image/eurofad.jpg";
import merris from "../../../../assets/image/merris.jpg";
import ferme from "../../../../assets/image/ferme.jpg";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Experiences() {
  const { t } = useTranslation();
  const [isclicked, setIsClicked] = useState(null);
  const [hiddenContainer, setHiddenContainer] = useState(true);
  const handleClick = (id) => {
    setIsClicked(isclicked === id ? null : id);
  };
  const handleClickContainer = () => {
    setHiddenContainer(!hiddenContainer);
    console.log('====================================');
    console.log(hiddenContainer);
    console.log('====================================');
  };

  return (
    <>
      <h2 className={`${styles.title}`} onClick={() => {handleClickContainer()}}>{t("ExperiencesTitle")}</h2>
      <div className={` ${hiddenContainer === true ? styles.hiddenContainer : ""}`}>
      <div className={`${styles.gridExp}`}>
        <article
          className={`${styles.three}`}
          onClick={() => handleClick("three")}
        >
          <time datetime="2022">2022</time>
          <img src={eurofad} alt="Eurofad"></img>
          <div className={`${isclicked === "three" ? styles.textEffect : ""}`}>
            <h3>Eurofad<br/>stagiaire</h3>
            <p>
              Développeur full-stack Symfony, refonte totale du site web selon
              la maquette
            </p>
          </div>
        </article>
        <article className={`${styles.one}`} onClick={() => handleClick("one")}>
          <time datetime="2023">2023</time>
          <img src={ferme} alt="ferme"></img>
          <div className={`${isclicked === "one" ? styles.textEffect : ""}`}>
            <h3>La ferme est dans le sac
              <br/>
              stagiaire</h3>
            <p>Développeur front React et intégrateur Shopify durant 2 mois dans le cadre de ma certification CDA</p>
          </div>
        </article>
        <article
          className={`${styles.five}`}
          onClick={() => handleClick("five")}
        >
          <time datetime="2016-2023">2016-2023</time>
          <img src={brico} alt="Brico dépôt"></img>
          <div className={`${isclicked === "five" ? styles.textEffect : ""}`}>
            <h3>Brico dépôt<br/>CDI</h3>
            <p>
              Vendeur technique en Peinture et bricolage, gestion du rayon,
              vente
            </p>
          </div>
        </article>
        <article className={`${styles.two}`} onClick={() => handleClick("two")}>
          <time datetime="2014-2016">2014-2016</time>
          <img src={merris} alt="Merris Hydraulique"></img>
          <div className={`${isclicked === "two" ? styles.textEffect : ""}`}>
            <h3>Merris Hydraulique<br/>CDI</h3>
            <p>
              Magasinier, carriste, préparateur de commande, livreur et
              commercial
            </p>
          </div>
        </article>
        <div className={`${styles.containerArrow}`}>
          <img
            src={spinningArrow}
            className={`${styles.six}`}
            alt="spinning arrow"
          ></img>
        </div>
        <article
          className={`${styles.four}`}
          onClick={() => handleClick("four")}
        >
          <time datetime="2012-2014">2012-2014</time>
          <img src={aerol} alt="aerol"></img>
          <div className={`${isclicked === "four" ? styles.textEffect : ""}`}>
            <h3>Aerol<br/>CDI</h3>
            <p>
              Commercial, vente au particulier d'équipement technique pour
              l'amélioration du domicile
            </p>
          </div>
        </article>
      </div>
      </div>
    </>
  );
}
