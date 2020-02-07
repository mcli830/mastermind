import { OPEN_MENU } from '../actions/ui'

const initialState = {
  menuOpen: false,
}

export default function uiReducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_MENU:
      return {
        ...state,
        menuOpen: action.payload.toggle,
      }
      
    default:
      return state
  }
}
