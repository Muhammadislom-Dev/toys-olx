import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Wrapper from "./components/Wrapper";
import { Provider } from "./context/AddCard";
import { LikeProvider } from "./context/LikeCard";
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Wrapper>
        <LikeProvider>
          <App />
        </LikeProvider>
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
