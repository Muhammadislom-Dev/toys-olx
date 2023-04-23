import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Wrapper from "./components/Wrapper";
import { Provider } from "./context/AddCard";
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Wrapper>
        <App />
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
