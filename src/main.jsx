import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/404.jsx";
import Home from "./pages/Home.jsx";
import Certificates from "./pages/Certificates.jsx";
import Portofolio from "./pages/Portofolio.jsx";
import CommingSoon from "./pages/CommingSoon.jsx";
import Opening from "./pages/Opening.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Opening />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
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
