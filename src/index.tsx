import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { MessageType, state } from "./state/state";

export type PostType = {
  id: string;
  message: string;
  likesCount: number
};

export type ProfilePageType = {
  posts: PostType[];
};

export type DialogsListItem = {
  id: string,
  name: string,
  messagesList: MessageType[]
}

export type DialogsPageType = {
  dialogsList: DialogsListItem[]
}

export type stateType = {
  ProfilePage: ProfilePageType
  DialogsPage: DialogsPageType
};

ReactDOM.render(
  <>
    <App state={state} />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
