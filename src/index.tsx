import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { store } from "./redux/store";

export const renderTree = () => {
  ReactDOM.render(
    <>
      <App state={store.getState()} 
          dispatch={store.dispatch.bind(store)} />
      <GlobalStyle />
    </>,
    document.getElementById("root")
  );
}

store.subscribe(renderTree)

renderTree()
