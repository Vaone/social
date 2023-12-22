import React from 'react';
import FriendMessage from './friend-message/FriendMessage';
import MessageSender from './message-sender/MessageSender';
import Message from './message/Message';
import avatar from "./avatar.png";
import avatar2 from "./avatar2.png";

type UserType = {
  avatar: string;
  name: string;
};
type MessageTextType = {
  text: string;
  time: string;
};

// нужно создать правильный тип вместо any
export type MessageType = {
  id: number;
  user: UserType;
  message: MessageTextType;
};
// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: "Vaone", // можно менять
  },
  message: {
    text: "Hello, she didn’t do anything and rested all day, how are you?", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar2, // можно менять
    name: "Анаколий", // можно менять
  },
  message: {
    text: "зеркальное сообщение для тренировки css", // можно менять
    time: "23:00", // можно менять
  },
};

const DialogWindow = () => {
  return (
    <div>
      <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        <MessageSender M={Message} />
    </div>
  )
};

export default DialogWindow;