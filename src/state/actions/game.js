export const ADD_GLYPH = 'ADD_GLYPH'
export const CHANGE_TARGET = 'CHANGE_TARGET'

export const addGlyph = (id) => ({
  type: ADD_GLYPH,
  payload: { id }
})

export const changeTarget = (index) => ({
  type: CHANGE_TARGET,
  payload: { index }
})
