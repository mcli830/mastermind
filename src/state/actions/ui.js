export const OPEN_MENU = 'OPEN_MENU'
export const OPEN_INFO = 'OPEN_INFO'
export const OPEN_DIALOGUE = 'OPEN_DIALOGUE'

export const openMenu = open => ({
  type: OPEN_MENU,
  payload: { open }
})

export const openInfo = open => ({
  type: OPEN_INFO,
  payload: { open }
})

export const openDialogue = (open, name) => ({
  type: OPEN_DIALOGUE,
  payload: { open, name }
})
