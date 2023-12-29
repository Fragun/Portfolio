import Devinanimot from "../../../../../assets/image/Devinanimot.png";
import MyYuka from "../../../../../assets/image/myYuka.png";
import AlignesEn4 from "../../../../../assets/image/alignesEn4.png";
import nationsStar from "../../../../../assets/image/nationsStar.png";
import meteo from "../../../../../assets/image/meteo.png";
import eurofad from "../../../../../assets/image/eurofad.png";
import memoireDeRecette from "../../../../../assets/image/memoireDeRecette.png";
import appli20sorties from "../../../../../assets/image/appli20sorties.png";

export const worksTab = [
  {
    id: 1,
    title: "Devinanimot",
    address: "https://david.mystagiaire.fr/asset/oeuvres/lePendu2/index.html",
    img: Devinanimot,
    alt: "devinanimot's game",
    description: "Jeu réalisé en Javascript, HTML et CSS",
  },
  {
    id: 2,
    title: "My yuka",
    address: "https://david.mystagiaire.fr/asset/oeuvres/myyuka/",
    img: MyYuka,
    alt: "MyYuka's app",
    description:
      "Application Augular avec API Open Food Fact permettant d'entrer le code barre pour avoir des informations sur les produits alimentaires",
  },
  {
    id: 3,
    title: "Alignes En 4",
    address: "https://alignes-en4-rii9n3gj8-memoirederecettes.vercel.app/",
    img: AlignesEn4,
    alt: "Jeu Alignes en 4",
    description: "Jeu du puissance 4 en Javascript",
  },
  {
    id: 4,
    title: "Nations Star",
    img: nationsStar,
    alt: "Quiz nations star",
    description: "Quiz en React Native avec Firebase",
  },
  {
    id: 5,
    title: "Météo",
    img: meteo,
    alt: "Application météo",
    description: "Application météo en React Native avec API 'openweathermap'",
  },
  {
    id: 6,
    title: "Eurofad",
    address: "https://eurofad.fr/",
    img: eurofad,
    alt: "Eurofad",
    description: "Site internet du centre de formation Eurofad en Symfony",
  },
  {
    id: 7,
    title: "Mémoire De Recettes",
    address: "https://github.com/Fragun/memoireDeRecettes2",
    img: memoireDeRecette,
    alt: "Mémoire de recettes",
    description: "Projet personnel, application web en REACT et Express.js pour stocker mes recettes de cuisine en local pour le moment",
  },
  {
    id: 8,
    title: "20 sorties",
    address: "https://github.com/Fragun/front-20sorties",
    img: appli20sorties,
    alt: "20 sorties, application",
    description: "Application web en REACT avec Google API, Map et Places permettant de trouver rapidement, grâce à la géolocalisation du navigateur, les lieux touristiques autour de votre position.",
  },

];
