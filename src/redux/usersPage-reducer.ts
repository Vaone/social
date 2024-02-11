const initialState:UserPageType = {
  users: [],
  pageSize: 5,
  usersCount: 1,
  currentPage: 1,
  isLoading: false
}

//various
const FOLLOW_HANDLER = 'FOLLOW-HANDLER';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const PAGE_CHANGE = 'PAGE-CHANGE';
const TOGGLE_LOADER = 'TOGGLE-LOADER';

// actions
export const followHandler = (userId: number)=>({type: FOLLOW_HANDLER, payload: {userId}} as const)
export const setUsers = (users: UserType[])=>({type: SET_USERS, payload: {users}} as const)
export const setUsersCount = (count: number)=>({type: SET_USERS_COUNT, payload: {count}} as const)
export const onPageChange = (page: number)=>({type: PAGE_CHANGE, payload: {page}} as const)
export const toggleLoader = (isLoading: boolean)=>({type: TOGGLE_LOADER, payload: {isLoading}} as const)

export const usersPageReducer = (state = initialState, action: UsersPageActionsTypes):UserPageType => {
  switch (action.type) {
    case FOLLOW_HANDLER:
      return {...state, users: state.users.map(u=>u.id===action.payload.userId ? {...u, followed: !(u.followed)} : u)}
    case SET_USERS:
      return {...state, users: [...action.payload.users]}
    case SET_USERS_COUNT:
      return {...state, usersCount: action.payload.count}
    case PAGE_CHANGE:
      return {...state, currentPage: action.payload.page}
    case TOGGLE_LOADER:
      return {...state, isLoading: action.payload.isLoading}
    default:
      return state;
  }
}

export type UserType = {
  id: number, 
  photos: PhotoType, 
  name: string, 
  status: string, 
  followed: boolean
}
export type UserPageType = {
  users: UserType[]
  usersCount: number
  currentPage: number
  pageSize: number
  isLoading: boolean
}
type PhotoType = {
  small: string,
  large: string
}
type UsersPageActionsTypes = ReturnType<typeof followHandler> 
| ReturnType<typeof setUsers> 
| ReturnType<typeof setUsersCount>
| ReturnType<typeof onPageChange>
| ReturnType<typeof toggleLoader>