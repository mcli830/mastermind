export const ADD_GLYPH = 'ADD_GLYPH'
export const CHANGE_TARGET = 'CHANGE_TARGET'
export const SUBMIT_SEQUENCE = 'SUBMIT_SEQUENCE'

export const addGlyph = (id) => ({
  type: ADD_GLYPH,
  payload: { id }
})

export const changeTarget = (index) => ({
  type: CHANGE_TARGET,
  payload: { index }
})

export const submitSequence = (submission) => ({
  type: SUBMIT_SEQUENCE,
  payload: { submission }
})

// record result enumeration values:
// 0: incorrect number and position
// 1: correct number, but not position
// 2: correct number and position

export function createRecord(state, submission) {
  const result = []
  const sequence = submission.map(id => state.pool[id].value)
  console.log(state.pool)
  console.log(sequence)
  // data copies
  const player = sequence.slice()
  const key = state.sequence.slice()
  // find all correctly placed numbers in sequence
  let i = 0;
  while( i < key.length ) {
    if(player[i] === key[i]) {
      player.splice(i,1)
      key.splice(i,1)
      result.push(2)
    } else {
      i++
    }
  }
  // collect remaining correct, misplaced numbers
  i = 0;
  while( i < key.length ) {
    if (key.includes(player[i])) {
      player.splice(i,1)
      key.splice(i,1)
      result.push(1)
    } else {
      i++
    }
  }
  // fill result with zeros until max size 4
  while (result.length < 4) {
    result.push(0)
  }
  // return record object formatted for state
  return {
    sequence,
    result,
  }
}
