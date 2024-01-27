
import { combineReducers, createStore } from "redux"
import { profilePageReducer, ProfilePageType } from "./profilePage-reducer";

const rootReducer = combineReducers(
  {
    profilePage: profilePageReducer,
  }
)

export type AppRootReducerStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)