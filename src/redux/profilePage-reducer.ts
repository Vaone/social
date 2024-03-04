import { Dispatch } from "redux";
import { ProfileAPI, T_Profile } from "../api/ProfileAPI";
import { toggleLoader } from "./common-reducer";
import { AppThunk } from "./redux-store";

// various
export const ADD_POST = "ADD-POST";
export const CHANGE_POST_INPUT = "CHANGE-POST_INPUT";
export const SET_PROFILE = "SET-PROFILE";
export const SET_PROFILE_STATUS = "SET-SET_PROFILE_STATUS";

// actions
export const addPost = () => ({ type: ADD_POST } as const);
export const changePost = (text: string) =>
  ({ type: CHANGE_POST_INPUT, payload: { text: text } } as const);
export const setProfile = (profile: T_Profile) =>
  ({ type: SET_PROFILE, payload: { profile } } as const);
export const setProfileStatus = (status: string) =>
  ({ type: SET_PROFILE_STATUS, payload: { status } } as const);

const initialState: ProfilePageType = {
  posts: [
    { id: "1", message: "Сообщение 1", likesCount: 0 },
    { id: "2", message: "Сообщение 2", likesCount: 2 },
    { id: "3", message: "Сообщение 3", likesCount: 10 },
    { id: "4", message: "Сообщение 4", likesCount: 20 },
  ],
  newPostText: "",
  profile: {
    userId: 1234,
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    photos: {
      small: "",
      large: "",
    },
  },
  status: "",
};

export const profilePageReducer = (
  state = initialState,
  action: ProfilePageActionsType
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
    case SET_PROFILE_STATUS: {
      return { ...state, status: action.payload.status };
    }
    default: {
      return state;
    }
  }
};

//thunks
export const getProfileTC =
  (userId: number): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(toggleLoader(true));
    const data = await ProfileAPI.getProfile(userId);
    dispatch(setProfile(data));
    dispatch(toggleLoader(false));
  };
export const getProfileStatusTC =
  (userId: number): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(toggleLoader(true));
    const status = await ProfileAPI.getProfileStatus(userId);
    status
      ? dispatch(setProfileStatus(status))
      : dispatch(setProfileStatus(""));
    dispatch(toggleLoader(false));
  };
export const upadteStatusFieldTC =
  (status: string): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(toggleLoader(true));
    const res = await ProfileAPI.updateStatusField(status);
    if (res.resultCode === 0) {
      dispatch(setProfileStatus(status))
      dispatch(toggleLoader(false));
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
  profile: T_Profile;
  status: string;
};
export type ProfilePageActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof changePost>
  | ReturnType<typeof setProfile>
  | ReturnType<typeof setProfileStatus>;
