import { SET_LEFTY } from '../actions/settings'
import { CHANGE_GLYPHSET } from '../actions/settings'
import { VIEW_COLORS } from '../actions/settings'

const initialState = {
  lefty: false,
  glyphSet: 'greek',
  colorsOn: false,
}

export default function gameReducer(state = initialState, action) {
  switch(action.type) {
    case SET_LEFTY:
      return {
        ...state,
        lefty: action.payload.toggle,
      }
    case CHANGE_GLYPHSET:
      return {
        ...state,
        glyphSet: action.payload.set,
      }
    case VIEW_COLORS:
      return {
        ...state,
        colorsOn: action.payload.toggle,
      }
    default:
      return state
  }
}
