import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// constants
import themes from "./theme/schema.json";

// utils
import { saveState } from "./utils/localstorage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Index = () => {
  saveState(themes, "all-themes");
  return <App />;
};

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
