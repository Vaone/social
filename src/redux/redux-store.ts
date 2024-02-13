import { DialogActionsType, dialogPageReducer } from './dialogPage-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux"
import { ProfilePageActionsType,  profilePageReducer } from "./profilePage-reducer";
import { UsersPageActionsType, usersPageReducer } from './usersPage-reducer';
import { CmnActionsType, commonReducer } from './common-reducer';
import { authReducer } from './auth-reducer';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers(
  {
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer,
    anyPage: commonReducer,
    authUser: authReducer
  }
)

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppActionsType = ProfilePageActionsType & DialogActionsType & CmnActionsType & UsersPageActionsType
// export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>