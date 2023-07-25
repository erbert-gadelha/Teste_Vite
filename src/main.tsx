import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "./global.css";
//import Provider from "./Provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //<React.StrictMode>
  //  <Provider>
      <div>
      	<h1>Tela Inicial</h1>
      	<input type="text" placeholder="pesquisar"></input>
      	<button>pesquisar</button>
      </div>
  //  </Provider>
  //</React.StrictMode>
);
