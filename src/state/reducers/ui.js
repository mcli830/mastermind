import { OPEN_MENU } from '../actions/ui'
import { OPEN_INFO } from '../actions/ui'

const initialState = {
  infoIsOpen: false,
  menuIsOpen: false,
}

export default function uiReducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_INFO:
      return {
        ...initialState,
        infoIsOpen: action.payload.toggle,
      }

    case OPEN_MENU:
      return {
        ...initialState,
        menuIsOpen: action.payload.toggle,
      }

    default:
      return state
  }
}
