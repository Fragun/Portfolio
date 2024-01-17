import { Suspense } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/i18n";
import Footer from "./components/Footer/Footer";
import AppProvider from "./components/provider/AppProvider";

export default function App() {
  return (
    <div className={`df fc ${styles.portfolioContainer}`}>
      <I18nextProvider i18n={i18n}>
        <AppProvider>
          <Suspense>
            <Outlet />
          </Suspense>
        </AppProvider>
        <Footer />
      </I18nextProvider>
    </div>
  );
}
