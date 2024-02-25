import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { redirectAuth } from "../../component/AuthRedirect";
import { FriendType, MessagesListType, sendNewMessage } from "../../redux/dialogPage-reducer";
import { RootState } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: RootState) => {
  return {
    friendList: state.dialogPage.friendList,
    messageList: state.dialogPage.messageList,
  };
};

const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {sendNewMessage}),
  redirectAuth
)(Dialogs)

export default DialogsContainer;

//types
type MapStateToPropsType = {
  friendList: FriendType[],
  messageList: MessagesListType,
};
type MapDispatchToPropsType = {
  sendNewMessage: (newMessage: string, friendId: string)=>void
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;
