import { v1 } from "uuid";

//variables
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

//actions
export const sendNewMessage = (newMessage: string, friendId: string) => ({type: SEND_NEW_MESSAGE, payload:{text:newMessage, friendId: friendId}} as const)

const initialState: DialogPageType = {
  messageList: {
    "1": [
      { messageId: "1", text: "Hello", time: "14:14", sender: "Stepan" },
      { messageId: "2", text: "Hello", time: "14:14", sender: "Me" },
    ],
    "2": [
      { messageId: "1", text: "Hello", time: "14:14", sender: "Viktor" },
      { messageId: "2", text: "Hello", time: "14:14", sender: "Me" },
    ],
    "3": [
      { messageId: "1", text: "Hello", time: "14:14", sender: "Yi" },
      { messageId: "2", text: "Hello", time: "14:15", sender: "Me" },
      { messageId: "3", text: "Hs", time: "14:16", sender: "Me" },
      { messageId: "4", text: "Hs", time: "14:16", sender: "Yi" },
    ],
  },
  friendList: [
    { friendId: "1", name: "Stepan" },
    { friendId: "2", name: "Viktor" },
    { friendId: "3", name: "Yi" },
  ],
}

export const dialogPageReducer = (state=initialState, action: DialogActionsType) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      const time = new Date()
      const newMessage = {
        messageId: v1(), text: action.payload.text, time: `${time.getHours()} : ${time.getMinutes()}`, sender: "Me"
      }
      return {...state, messageList: {...state.messageList, [action.payload.friendId]: [...state.messageList[action.payload.friendId], newMessage] }}
    default:
      return state
  }
}

// types
export type MessageType = {
  messageId: string;
  text: string;
  time: string;
  sender: string;
};
export type MessagesListType = {
  [messageId: string]: MessageType[];
};
export type FriendType = {
  friendId: string, 
  name: string,
}
export type DialogPageType = {
  messageList: MessagesListType,
  friendList: FriendType[]
}
export type DialogActionsType = ReturnType<typeof sendNewMessage>