import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page";
import Panel from "./PanelPage";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Page />,
  },
  {
    path: "panel",
    element: <Panel />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
