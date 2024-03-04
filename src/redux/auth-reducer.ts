import { toggleInitialization } from './common-reducer';
import { AppThunk } from "./redux-store";
import { AuthAPI, T_AuthResponseData } from "../api/Api";
import { Dispatch } from "redux";

const initialState: AuthUserType = {
  id: 0,
  email: "",
  login: "",
  isAuth: false,
};

//various
const SET_USER = "SET_USER";
const SET_AUTH = "SET_AUTH";

// actions
export const setUser = (user: T_AuthResponseData) =>
  ({ type: SET_USER, payload: { user } } as const);
export const setAuth = (isAuth: boolean) =>
  ({ type: SET_AUTH, payload: { isAuth } } as const);

export const authReducer = (
  state = initialState,
  action: UsersPageActionsType
): AuthUserType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload.user };
    case SET_AUTH:
      return { ...state, isAuth: action.payload.isAuth };
    default:
      return state;
  }
};

// thunks
export const getAuthTC = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    const res = await AuthAPI.getAuth();
    dispatch(setUser(res.data));
    dispatch(setAuth(true));
  } catch (error) {
    console.warn(error);
  } finally {
    dispatch(toggleInitialization(true))
  }
};

//types
export type AuthUserType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
};
type UsersPageActionsType =
  | ReturnType<typeof setUser>
  | ReturnType<typeof setAuth>;
