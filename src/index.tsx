import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { AppRootReducerStateType, store } from "./redux/redux-store";
import { useSelector } from "react-redux";

export const renderTree = () => {
  // let reduxState = useSelector<AppRootReducerStateType, AppRootReducerStateType>((state)=>state)
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
