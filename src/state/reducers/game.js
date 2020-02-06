import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_ERROR } from '../actions/random'
import { ADD_GLYPH, CHANGE_TARGET, SUBMIT_SEQUENCE, createRecord, winningRecord } from '../actions/game'
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
      let updated = [...state.selection]
      updated[state.target] = action.payload.id
      return {
        ...state,
        selection: updated,
        target: cycleIndex(state.target, state.selection.length),
      }
    case CHANGE_TARGET:
      return {
        ...state,
        target: action.payload.index,
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
          newRecord,
          ...state.history
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
