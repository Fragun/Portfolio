import { Suspense } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className={`${styles.portfolioContainer}`}>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}