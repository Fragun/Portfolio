import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from "./en/translation.json";
import translationFR from "./fr/translation.json";

const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };
  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',  // Langue par défaut
    keySeparator: false,  // Utilisé pour les clés imbriquées (ex: 'parent.child')
    interpolation: {
      escapeValue: false,  // Les balises HTML dans les traductions ne sont pas échappées
    },
  });

export default i18n;