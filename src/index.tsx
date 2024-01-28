import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";

export const renderTree = () => {
  ReactDOM.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </>,
    document.getElementById("root")
  );
}

store.subscribe(renderTree)

renderTree()
