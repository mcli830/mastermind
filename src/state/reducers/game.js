import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_ERROR } from '../actions/random'
import { ADD_GLYPH, REMOVE_GLYPH, CHANGE_TARGET, CLEAR_SELECTION, SUBMIT_SEQUENCE, createRecord } from '../actions/game'
import { cycleIndex } from '../../lib/array'

const newSelection = () => {
  return Array(4).fill(null)
}

const initialState = {
  loading: false,
  error: null,
  pool: [],
  sequence: [],
  selection: newSelection(),
  target: 0,
  history: [],
  playerWin: false,
  playerLose: false,
}

export default function gameReducer(state = initialState, action) {

  const selectionSize = state.selection.length

  switch(action.type) {

    case ADD_GLYPH:
      let selectionAdded = [...state.selection]
      selectionAdded[state.target] = action.payload.id
      // automatically select next index, prioritizing next empty slot
      let nextIndex = cycleIndex(state.target, selectionSize)
      while(nextIndex !== state.target) {
        if (selectionAdded[nextIndex] === null) break;
        nextIndex = cycleIndex(nextIndex, selectionSize)
      }
      if (nextIndex === state.target) {
        nextIndex = cycleIndex(nextIndex, selectionSize)
      }
      return {
        ...state,
        selection: selectionAdded,
        target: nextIndex,
      }

    case REMOVE_GLYPH:
      let selectionRemoved = [...state.selection]
      selectionRemoved[action.payload.index] = null
      return {
        ...state,
        selection: selectionRemoved,
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
      const playerWin = newRecord.result.perfect === 4
      // player loses if this attempt is #10 without correct sequence
      const playerLose = playerWin ? false : state.history.length >= 9
      const keepSelection = playerWin || playerLose
      return {
        ...state,
        history: [
          ...state.history,
          newRecord,
        ],
        selection: keepSelection ? state.selection : Array(4).fill(null),
        target: keepSelection ? state.target : 0,
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
        ...initialState,
        sequence: action.payload.sequence,
        selection: newSelection(),
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
