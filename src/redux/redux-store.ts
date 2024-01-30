import { dialogPageReducer } from './dialogPage-reducer';
import { combineReducers, createStore } from "redux"
import { profilePageReducer } from "./profilePage-reducer";
import { usersPageReducer } from './usersPage-reducer';

const rootReducer = combineReducers(
  {
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer,
  }
)

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch