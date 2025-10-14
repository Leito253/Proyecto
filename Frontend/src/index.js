import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="767568692949-8vg90n6rbpi73crs9jufgb5d56c8et9e.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);