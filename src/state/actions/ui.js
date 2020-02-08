export const OPEN_MENU = 'OPEN_MENU'
export const OPEN_INFO = 'OPEN_INFO'
export const OPEN_DIALOGUE = 'OPEN_DIALOGUE'

export const openMenu = toggle => ({
  type: OPEN_MENU,
  payload: { toggle }
})

export const openInfo = toggle => ({
  type: OPEN_INFO,
  payload: { toggle }
})

export const openDialogue = toggle => ({
  type: OPEN_DIALOGUE,
  payload: { toggle }
})
