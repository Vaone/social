const initialState:CmnStateType = {
  isLoading: false,
  isInitialized: false
}

const TOGGLE_LOADER = 'TOGGLE-LOADER'
const TOGGLE_INITIALIZATION = 'TOGGLE-INITIALIZATION'

export const toggleLoader = (isLoading: boolean) => ({type: TOGGLE_LOADER, payload: {isLoading}} as const)
export const toggleInitialization = (isInitialized: boolean) => ({type: TOGGLE_INITIALIZATION, payload: {isInitialized}} as const)

export const commonReducer = (state = initialState, action:CmnActionsType) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {...state, isLoading: action.payload.isLoading}
    case TOGGLE_INITIALIZATION:
      return {...state, isInitialized: action.payload.isInitialized}
    default:
      return state
  }
}

type CmnStateType = {
  isLoading: boolean,
  isInitialized: boolean
}
export type CmnActionsType = ReturnType<typeof toggleLoader> | ReturnType<typeof toggleInitialization>