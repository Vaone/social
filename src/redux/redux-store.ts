import { dialogPageReducer } from './dialogPage-reducer';
import { combineReducers, createStore } from "redux"
import { profilePageReducer } from "./profilePage-reducer";

const rootReducer = combineReducers(
  {
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer
  }
)

export type AppRootReducerStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)