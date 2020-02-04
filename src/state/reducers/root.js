import { combineReducers } from 'redux'
import game from './game'
import ui from './ui'
import settings from './settings'
import pool from './pool'

export default combineReducers({
  game,
  ui,
  settings,
  pool,
})
