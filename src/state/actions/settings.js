export const SET_LEFTY = 'SET_LEFTY'
export const VIEW_GLYPHS = 'VIEW_GLYPHS'
export const VIEW_COLORS = 'VIEW_COLORS'

export const setLefty = toggle => ({
  type: SET_LEFTY,
  payload: { toggle }
})

export const viewGlyphs = toggle => ({
  type: VIEW_GLYPHS,
  payload: { toggle }
})

export const viewColors = toggle => ({
  type: VIEW_COLORS,
  payload: { toggle }
})
