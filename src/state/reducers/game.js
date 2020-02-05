import {
  ADD_GLYPH
} from '../actions/game'
import { cycleIndex } from '../../lib/array'

const initialState = {
  selection: Array(4).fill(null),
  target: 0,
}

export default function gameReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_GLYPH:
      let updated = [...state.selection]
      updated[state.target] = action.payload.id
      return {
        ...state,
        selection: updated,
        target: cycleIndex(state.target, state.selection.length),
      }
    default:
      return state
  }
}
