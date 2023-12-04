import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import OtherPage from "./pages/OtherPage/OtherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/otherPage",
        element: <OtherPage />,
        // loader: teamLoader,
      },
    ],
  },
]);
