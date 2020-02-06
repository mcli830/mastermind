import { SET_LEFTY } from '../actions/settings'

const initialState = {
  lefty: false
}

export default function gameReducer(state = initialState, action) {
  switch(action.type) {
    case SET_LEFTY:
      return {
        ...state,
        lefty: action.payload.lefty,
      }
    default:
      return state
  }
}
