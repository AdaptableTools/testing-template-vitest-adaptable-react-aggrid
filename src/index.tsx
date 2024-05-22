import React from "react";
import "@adaptabletools/adaptable/index.css";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-balham.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
    }}
  >
    <App />
  </div>,
);
