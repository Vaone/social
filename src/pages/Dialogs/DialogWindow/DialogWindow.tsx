import React, { FC } from "react";
import { MessagesType } from "../../Profile/MyPosts/MyPosts";
import FriendMessage from "./friend-message/FriendMessage";
import MessageSender from "./message-sender/MessageSender";
import Message from "./message/Message";

type dialogsWindowProps = {
  messagesList: any
}

const DialogWindow:FC<dialogsWindowProps> = ({messagesList}) => {
  return (
    <div>
      <div>
        <Message message={messagesList[0]} />
        <FriendMessage message={messagesList[1]} />
      </div>
      <MessageSender />
    </div>
  );
};

export default DialogWindow;
