import { SET_LEFTY } from '../actions/settings'
import { VIEW_GLYPHS } from '../actions/settings'
import { VIEW_COLORS } from '../actions/settings'

const initialState = {
  lefty: false,
  glyphsOn: true,
  colorsOn: false,
}

export default function gameReducer(state = initialState, action) {
  switch(action.type) {
    case SET_LEFTY:
      return {
        ...state,
        lefty: action.payload.toggle,
      }
    case VIEW_GLYPHS:
      return {
        ...state,
        glyphsOn: action.payload.toggle,
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
