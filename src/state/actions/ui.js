export const OPEN_MENU = 'OPEN_MENU'
export const OPEN_INFO = 'OPEN_INFO'

export const openMenu = toggle => ({
  type: OPEN_MENU,
  payload: { toggle }
})

export const openInfo = toggle => ({
  type: OPEN_INFO,
  payload: { toggle }
})
