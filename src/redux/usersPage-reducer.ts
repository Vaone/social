import { Dispatch } from "redux";
import { UserAPI } from "../api/Api";
import { toggleLoader } from "./common-reducer";
import { AppThunk } from "./redux-store";

const initialState: UserPageType = {
  users: [],
  pageSize: 5,
  usersCount: 1,
  currentPage: 1,
  followInProgress: [],
};

//various
const FOLLOW_HANDLER = "FOLLOW-HANDLER";
const SET_USERS = "SET-USERS";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const PAGE_CHANGE = "PAGE-CHANGE";
const TOGGLE_BTN_DISABLED = "TOGGLE-BTN-DISABLED";

// actions
export const setFollow = (userId: number) =>
  ({ type: FOLLOW_HANDLER, payload: { userId } } as const);
export const setUsers = (users: UserType[]) =>
  ({ type: SET_USERS, payload: { users } } as const);
export const setUsersCount = (count: number) =>
  ({ type: SET_USERS_COUNT, payload: { count } } as const);
export const onPageChange = (page: number) =>
  ({ type: PAGE_CHANGE, payload: { page } } as const);
export const toggleFollowBtn = (userId: number) =>
  ({ type: TOGGLE_BTN_DISABLED, payload: { userId } } as const);

export const usersPageReducer = (
  state = initialState,
  action: UsersPageActionsType
): UserPageType => {
  switch (action.type) {
    case FOLLOW_HANDLER:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: !u.followed } : u
        ),
      };
    case SET_USERS:
      return { ...state, users: [...action.payload.users] };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.payload.count };
    case PAGE_CHANGE:
      return { ...state, currentPage: action.payload.page };
    case TOGGLE_BTN_DISABLED:
      return state.followInProgress.some((id) => id === action.payload.userId)
        ? {
            ...state,
            followInProgress: state.followInProgress.filter(
              (id) => id !== action.payload.userId
            ),
          }
        : {
            ...state,
            followInProgress: [
              ...state.followInProgress,
              action.payload.userId,
            ],
          };
    default:
      return state;
  }
};

//thunks
export const getUsersTC = (currentPage: number): AppThunk => async (dispatch: Dispatch) => {
    try {
      dispatch(toggleLoader(true));
      const data = await UserAPI.getUsers(currentPage);
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      dispatch(toggleLoader(false));
    }
  };

export const toggleFollowTC = (userId: number, userFollowed: boolean): AppThunk => async (dispatch: Dispatch) => {
  dispatch(toggleFollowBtn(userId));
  try {
    if (!userFollowed) {
      const data = (await UserAPI.followAnotherUser(userId)).data
      if (data.resultCode === 0) {
        dispatch(setFollow(userId));
      }
    } else {
      const data = (await UserAPI.unfollowAnotherUser(userId)).data
      if (data.resultCode === 0) {
        dispatch(setFollow(userId));
      }
    }
  } catch (err) {
    console.error("Error!: ", err);
  } finally {
    dispatch(toggleFollowBtn(userId));
  }
};

export type UserType = {
  id: number;
  photos: PhotoType;
  name: string;
  status: string;
  followed: boolean;
};
export type UserPageType = {
  users: UserType[];
  usersCount: number;
  currentPage: number;
  pageSize: number;
  followInProgress: number[];
};
type PhotoType = {
  small: string;
  large: string;
};
export type UsersPageActionsType =
  | ReturnType<typeof setFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setUsersCount>
  | ReturnType<typeof onPageChange>
  | ReturnType<typeof toggleFollowBtn>;
