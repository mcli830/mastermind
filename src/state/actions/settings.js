export const SET_LEFTY = 'SET_LEFTY'
export const CHANGE_GLYPHSET = 'CHANGE_GLYPHSET'
export const VIEW_COLORS = 'VIEW_COLORS'

export const setLefty = (toggle) => ({
  type: SET_LEFTY,
  payload: { toggle }
})

export const changeGlyphSet = (set) => ({
  type: CHANGE_GLYPHSET,
  payload: { set }
})

export const viewColors = (toggle) => ({
  type: VIEW_COLORS,
  payload: { toggle }
})
