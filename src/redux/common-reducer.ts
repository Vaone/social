const initialState:CmnStateType = {
  isLoading: false
}

const TOGGLE_LOADER = 'TOGGLE-LOADER'

export const toggleLoader = (isLoading: boolean) => ({type: TOGGLE_LOADER, payload:{isLoading}})

export const commonReducer = (state = initialState, action:CmnActionsType) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {...state, isLoading: action.payload.isLoading}
    default:
      return state
  }
}

type CmnStateType = {
  isLoading: boolean
}
type CmnActionsType = ReturnType<typeof toggleLoader>