import React, { FC } from "react";
import { MessageType } from "../../../../state/state";
import s from "./FriendMessage.module.css";

type FriendMessageProps = {
  message: MessageType;
};

const FriendMessage: FC<FriendMessageProps> = ({ message }) => {
  return (
    <div className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img src={message.user.avatar} />
        <div className={s.friendText}>
          <div className={s.friendName}>{message.user.name}</div>
          <pre className={s.friendMessageText}>{message.message.text}</pre>
        </div>
      </div>
      <div className={s.friendTime}>{message.message.time}</div>
    </div>
  );
};

export default FriendMessage;
