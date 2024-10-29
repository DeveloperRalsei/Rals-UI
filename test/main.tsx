import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page";
import { PanelPage } from "./PanelPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/index.css";

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
