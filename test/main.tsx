import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page";
import Panel from "./PanelPage";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../src";
import { ProgressBar, useNavProgress } from "./loadingbar";

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

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
