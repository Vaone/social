import { connect } from "react-redux";
import { FriendType, MessagesListType } from "../../redux/dialogPage-reducer";
import { AppDispatch, RootState } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapStateToPropsType = {
  friendList: FriendType[];
  messageList: MessagesListType;
};
type MapDispatchToPropsType = {};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootState) => {
  return {
    friendList: state.dialogPage.friendList,
    messageList: state.dialogPage.messageList,
  };
};
const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
  return {};
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
