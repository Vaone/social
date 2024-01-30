import { v1 } from "uuid";

export type UserType = {
  userId: string, 
  avatarPhoto?: string, 
  userName: string, 
  location: {city: string, country: string}, 
  statusMessage: string, 
  followed: boolean
}

type UsersPageActionsTypes = ReturnType<typeof followHandlerAC> | ReturnType<typeof setUsersAC> 

const initialState:UserType[] = []

//various
export const FOLLOW_HANDLER = 'FOLLOW-HANDLER';
export const SET_USERS = 'SET-USERS';

export const followHandlerAC = (userId: string)=>({type: FOLLOW_HANDLER, payload: {userId: userId}} as const)
export const setUsersAC = (users: UserType[])=>({type: SET_USERS, payload: {users: users}} as const)

export const usersPageReducer = (state = initialState, action: UsersPageActionsTypes):UserType[] => {
  switch (action.type) {
    case FOLLOW_HANDLER:
      return state.map(u=>u.userId===action.payload.userId ? {...u, followed: !(u.followed)} : u)
    case SET_USERS:
      return [...action.payload.users]
    default:
      return state;
  }
}