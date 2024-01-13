import avatar from "../pages/Dialogs/DialogWindow/avatar.png";
import avatar2 from "../pages/Dialogs/DialogWindow/avatar2.png";

// types
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
export type PostType = {
  id: string;
  message: string;
  likesCount: number
};
export type ProfilePageType = {
  posts: PostType[],
  newPostText: string
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
// export type ActionType = AddPostActionType | ChangePostInputType
// type AddPostActionType = {
//   type: 'ADD-POST'
// };
// type ChangePostInputType = {
//   type: 'CHANGE-POST-INPUT',
//   payload: {
//     text: string
//   }
// };
type storeType = {
  _state: stateType,

  getState: ()=>stateType,
  // addPost: ()=>void,
  // onChangePostInput: (text: string)=>void,
  _subscribeCallback: ()=>void,
  subscribe: (callback: ()=>void)=>void,
  dispatch: (action: ActionsTypes)=>void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostAC>

//various
const ADD_POST = 'ADD-POST';
const CHANGE_POST_INPUT = 'CHANGE-POST-INPUT';

export const addPostAC = () => ({type: ADD_POST} as const) 
export const changePostAC = (text: string) => ({type: "CHANGE-POST-INPUT", payload: {text: text}} as const) 

export const message0 = {
  id: 0,
  user: {
    avatar: avatar,
    name: "Vaone",
  },
  message: {
    text: "Hello, she didn’t do anything and rested all day, how are you?",
    time: "22:00",
  },
}
const friendMessage0 = {
  id: 100,
  user: {
    avatar: avatar2,
    name: "Анаколий",
  },
  message: {
    text: "зеркальное сообщение для тренировки css",
    time: "23:00",
  },
}
const friendMessage1 = {
  id: 100,
  user: {
    avatar: avatar2,
    name: "Анаколий",
  },
  message: {
    text: "проверка роута",
    time: "23:00",
  },
}

export const store: storeType = {
  _state: {
    ProfilePage: {
      posts: [
        { id: "1", message: "Сообщение 1", likesCount: 0 },
        { id: "2", message: "Сообщение 2", likesCount: 2  },
        { id: "3", message: "Сообщение 3", likesCount: 10  },
        { id: "4", message: "Сообщение 4", likesCount: 20  },
      ],
      newPostText: ''
    },
    DialogsPage: {
      dialogsList: [
        {id: "1", 
        name: 'Viktor', 
        messagesList: [
          message0, 
          friendMessage1,
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
  },
  //getState 
  getState() {
    return this._state
  },
  // callback render
  _subscribeCallback() {},
  subscribe(callback) {
    this._subscribeCallback = callback
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: Date.now().toString(),
          message: this._state.ProfilePage.newPostText,
          likesCount: 0
        };
        // return {...state, ProfilePage: {...state.ProfilePage, posts: [...state.ProfilePage.posts, newPost]}}
        this._state.ProfilePage.posts.push(newPost)
        this._subscribeCallback()
        break;
      case CHANGE_POST_INPUT:
        // return {...state, ProfilePage: {...state.ProfilePage, newPostText: text}}
        this._state.ProfilePage.newPostText = action.payload.text
        this._subscribeCallback()
        break

      default:
        break;
    }
  }
}
