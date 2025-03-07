import React from "react"; // core foundation
import ReactDOM from "react-dom/client"; // for web reactDom

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
