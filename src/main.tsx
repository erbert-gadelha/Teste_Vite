import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import Provider from "./Provider";
import Topbar from "./app/home/components/topbar/index";
import TelaInicial from "./app/home/pages/TelaInicial/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Topbar>
        <TelaInicial/>
        <App />
      </Topbar>


    </Provider>
  </React.StrictMode>
);
