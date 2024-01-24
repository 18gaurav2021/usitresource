import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react";
import ContextMailProvider from "./components/pages/Context/ContextMail.jsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextMailProvider>
        <App />
      </ContextMailProvider>
    </BrowserRouter>
  </React.StrictMode>
);
