import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/404.jsx";
import Home from "./pages/Home.jsx";
import Certificates from "./pages/Certificates.jsx";
import Portofolio from "./pages/Portofolio.jsx";
import CommingSoon from "./pages/CommingSoon.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Certificates",
    element: <Certificates />,
  },
  {
    path: "/Portofolio",
    element: <Portofolio />,
  },
  {
    path: "/CommingSoon",
    element: <CommingSoon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
