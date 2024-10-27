import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page";
import { PanelPage } from "./PanelPage";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Page />,
  },
  {
    path: "panel",
    element: <PanelPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(<App />);
