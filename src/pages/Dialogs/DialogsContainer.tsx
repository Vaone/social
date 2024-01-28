import { FC } from "react";
import {
  DialogActionTypes,
  DialogPageType,
} from "../../redux/dialogPage-reducer";
import Dialogs from "./Dialogs";

type DialogsConPropsType = {
  state: DialogPageType;
  dispatch: (action: DialogActionTypes) => void;
};

const DialogsContainer: FC<DialogsConPropsType> = ({ state, dispatch }) => {
  return (
    <Dialogs friendList={state.friendList} messageList={state.messageList} />
  );
};

export default DialogsContainer;
