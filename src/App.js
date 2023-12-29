import { Suspense } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/i18n";

export default function App() {
  return (
    <div className={`${styles.portfolioContainer}`}>
      <I18nextProvider i18n={i18n}>
        <Suspense>
          
          <Outlet />
        </Suspense>
      </I18nextProvider>
    </div>
  );
}
