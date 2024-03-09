import { DialogActionsType, dialogPageReducer } from './dialogPage-reducer';
import { combineReducers } from 'redux';
import { ProfilePageActionsType, profilePageReducer } from './profilePage-reducer';
import { UsersPageActionsType, usersPageReducer } from './usersPage-reducer';
import { CmnActionsType, commonReducer } from './common-reducer';
import { authReducer } from './auth-reducer';
import { ThunkAction } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, UnknownAction } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  usersPage: usersPageReducer,
  anyPage: commonReducer,
  authUser: authReducer
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppActionsType = ProfilePageActionsType | DialogActionsType | CmnActionsType | UsersPageActionsType;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
