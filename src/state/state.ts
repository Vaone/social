import avatar from "../pages/Dialogs/DialogWindow/avatar.png";
import avatar2 from "../pages/Dialogs/DialogWindow/avatar2.png";

type UserType = {
  avatar: string;
  name: string;
};
type MessageTextType = {
  text: string;
  time: string;
};
export type MessageType = {
  id: number;
  user: UserType;
  message: MessageTextType;
};
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar,
    name: "Vaone",
  },
  message: {
    text: "Hello, she didn’t do anything and rested all day, how are you?",
    time: "22:00",
  },
};
const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar2,
    name: "Анаколий",
  },
  message: {
    text: "зеркальное сообщение для тренировки css",
    time: "23:00",
  },
};
const friendMessage1: MessageType = {
  id: 100,
  user: {
    avatar: avatar2,
    name: "Анаколий",
  },
  message: {
    text: "проверка роута",
    time: "23:00",
  },
};

export const state = {
  ProfilePage: {
    posts: [
      { id: "1", message: " Сообщение 1", likesCount: 0 },
      { id: "2", message: " Сообщение 2", likesCount: 2  },
      { id: "3", message: " Сообщение 3", likesCount: 10  },
      { id: "4", message: " Сообщение 4", likesCount: 20  },
    ]
  },
  DialogsPage: {
    dialogsList: [
      {id: "1", 
      name: 'Viktor', 
      messagesList: [
        message0, 
        friendMessage0,
      ]},
      {id: "2", 
      name: 'Petya', 
      messagesList: [
        message0, 
        friendMessage1,
      ]},
      {id: "3", 
      name: 'Nikita', 
      messagesList: [
        message0, 
        friendMessage0,
      ]},
      {id: "4", 
      name: 'Vasylisa', 
      messagesList: [
        message0, 
        friendMessage0,
      ]},
      {id: "5", 
      name: 'Alexandra', 
      messagesList: [
        message0, 
        friendMessage0,
      ]},
      {id: "6", 
      name: 'Valera', 
      messagesList: [
        message0, 
        friendMessage0,
      ]},
    ],
    
  }
}


