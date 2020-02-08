import { OPEN_MENU } from '../actions/ui'
import { OPEN_INFO } from '../actions/ui'
import { OPEN_DIALOGUE } from '../actions/ui'

const initialState = {
  infoIsOpen: false,
  menuIsOpen: false,
  dialogueIsOpen: false,
  currentDialogue: null,
}

export default function uiReducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_INFO:
      return {
        ...initialState,
        infoIsOpen: action.payload.open,
      }

    case OPEN_MENU:
      return {
        ...initialState,
        menuIsOpen: action.payload.open,
      }

    case OPEN_DIALOGUE:
      return {
        ...initialState,
        dialogueIsOpen: action.payload.open,
        currentDialogue: action.payload.name,
      }

    default:
      return state
  }
}
