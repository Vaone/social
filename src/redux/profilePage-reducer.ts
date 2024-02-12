// various
export const ADD_POST = "ADD-POST";
export const CHANGE_POST_INPUT = "CHANGE-POST-INPUT";
export const SET_PROFILE = "SET-PROFILE";

// actions
export const addPost = () => ({ type: ADD_POST } as const);
export const changePost = (text: string) =>
  ({ type: CHANGE_POST_INPUT, payload: { text: text } } as const);
export const setProfile = (profile: T_Profile ) =>
  ({ type: SET_PROFILE, payload: {profile} } as const);

const initialState: ProfilePageType = {
  posts: [
    { id: "1", message: "Сообщение 1", likesCount: 0 },
    { id: "2", message: "Сообщение 2", likesCount: 2 },
    { id: "3", message: "Сообщение 3", likesCount: 10 },
    { id: "4", message: "Сообщение 4", likesCount: 20 },
  ],
  newPostText: "",
};

export const profilePageReducer = (
  state = initialState,
  action: ProfilePageActionsTypes
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Date.now().toString(),
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case CHANGE_POST_INPUT: {
      return { ...state, newPostText: action.payload.text };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.payload.profile };
    }
    default: {
      return state;
    }
  }
};

// types
export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
  profile?: T_Profile;
};
export type T_Profile = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: { small: string; large: string };
};
export type ProfilePageActionsTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof changePost>
  | ReturnType<typeof setProfile>;
