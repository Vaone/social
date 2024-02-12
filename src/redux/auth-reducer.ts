import { T_AuthResponseData } from "../api/Api";

const initialState:AuthUserType = {
  id: 2,
  email: '',
  login: '',
  isAuth: false
}

//various
const SET_USER = 'SET_USER';
const SET_AUTH = 'SET_AUTH';

// actions
export const setUser = (user: T_AuthResponseData)=>({type: SET_USER, payload: {user}} as const)
export const setAuth = (isAuth: boolean)=>({type: SET_AUTH, payload: {isAuth}} as const)

export const authReducer = (state = initialState, action: UsersPageActionsTypes):AuthUserType => {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.payload.user}
    case SET_AUTH:
      return {...state, isAuth: action.payload.isAuth}
    default:
      return state;
  }
}

//types
export type AuthUserType = {
  id: number
  email: string
  login: string
  isAuth: boolean
}
type UsersPageActionsTypes = ReturnType<typeof setUser> | ReturnType<typeof setAuth>