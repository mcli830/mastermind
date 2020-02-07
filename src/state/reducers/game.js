import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_ERROR } from '../actions/random'
import { ADD_GLYPH, REMOVE_GLYPH, CHANGE_TARGET, CLEAR_SELECTION, SUBMIT_SEQUENCE, createRecord } from '../actions/game'
import { cycleIndex } from '../../lib/array'

const initialState = {
  loading: false,
  error: null,
  pool: [],
  sequence: [],
  selection: Array(4).fill(null),
  target: 0,
  history: [],
  playerWin: false,
  playerLose: false,
}

export default function gameReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_GLYPH:
      let updatedAdd = [...state.selection]
      updatedAdd[state.target] = action.payload.id
      return {
        ...state,
        selection: updatedAdd,
        target: cycleIndex(state.target, state.selection.length),
      }
    case REMOVE_GLYPH:
      let updatedRemove = [...state.selection]
      updatedRemove[action.payload.index] = null
      return {
        ...state,
        selection: updatedRemove,
        target: action.payload.index,
      }
    case CHANGE_TARGET:
      return {
        ...state,
        target: action.payload.index,
      }
    case CLEAR_SELECTION:
      return {
        ...state,
        selection: Array(4).fill(null),
      }
    case SUBMIT_SEQUENCE:
      const newRecord = createRecord({...state}, action.payload.submission)
      // player wins if result is all perfect (2: matching number and position)
      const playerWin = newRecord.result.every(n => n === 2)
      // player loses if this attempt is #10 without correct sequence
      const playerLose = playerWin ? false : state.history.length >= 9
      return {
        ...state,
        history: [
          ...state.history,
          newRecord,
        ],
        selection: Array(4).fill(null),
        target: 0,
        playerWin,
        playerLose,
      }

    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        sequence: action.payload.sequence,
        pool: action.payload.pool.map((n,i) => ({
          id: i,
          value: n,
        }))
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
