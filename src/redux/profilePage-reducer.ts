import { ProfilePageType } from './store';

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostAC>

//various
export const ADD_POST = 'ADD-POST';
export const CHANGE_POST_INPUT = 'CHANGE-POST-INPUT';

export const addPostAC = () => ({type: ADD_POST} as const) 
export const changePostAC = (text: string) => ({type: CHANGE_POST_INPUT, payload: {text: text}} as const) 

export const profilePageReducer = (state: ProfilePageType, action: ActionsTypes):ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Date.now().toString(),
        message: state.newPostText,
        likesCount: 0
      };
      // return {...state, ProfilePage: {...state.ProfilePage, posts: [...state.ProfilePage.posts, newPost]}}
      state.posts.push(newPost)
      return state
    }
    case CHANGE_POST_INPUT: {
      // return {...state, ProfilePage: {...state.ProfilePage, newPostText: text}}
      state.newPostText = action.payload.text
      return state
    }
    default: {
      return state
    }
  }
}