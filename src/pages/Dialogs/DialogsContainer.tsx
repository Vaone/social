import { connect } from "react-redux";
import { FriendType, MessagesListType, sendNewMessageAC } from "../../redux/dialogPage-reducer";
import { AppDispatch, RootState } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapStateToPropsType = {
  friendList: FriendType[],
  messageList: MessagesListType,
};
type MapDispatchToPropsType = {
  sendNewMessage: (newMessage: string, friendId: string)=>void
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootState) => {
  return {
    friendList: state.dialogPage.friendList,
    messageList: state.dialogPage.messageList,
  };
};
const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
  return {
    sendNewMessage: (newMessage:string, friendId: string)=>{
      dispatch(sendNewMessageAC(newMessage, friendId))
    }
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
