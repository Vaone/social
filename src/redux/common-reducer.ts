const initialState: CmnStateType = {
  isLoading: false,
  isInitialized: false,
  error: null
};

const TOGGLE_LOADER = 'TOGGLE-LOADER';
const TOGGLE_INITIALIZATION = 'TOGGLE-INITIALIZATION';
const SET_ERROR = 'SET-ERROR';

export const toggleLoader = (isLoading: boolean) => ({ type: TOGGLE_LOADER, payload: { isLoading } } as const);
export const toggleInitialization = (isInitialized: boolean) =>
  ({ type: TOGGLE_INITIALIZATION, payload: { isInitialized } } as const);
export const setError = (error: null | string) => ({ type: SET_ERROR, payload: { error } } as const);

export const commonReducer = (state = initialState, action: CmnActionsType) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return { ...state, isLoading: action.payload.isLoading };
    case TOGGLE_INITIALIZATION:
      return { ...state, isInitialized: action.payload.isInitialized };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

type CmnStateType = {
  isLoading: boolean;
  isInitialized: boolean;
  error: null | string;
};
export type CmnActionsType =
  | ReturnType<typeof toggleLoader>
  | ReturnType<typeof toggleInitialization>
  | ReturnType<typeof setError>;
