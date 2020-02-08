import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalMenu from './ModalMenu'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openMenu } from '../state/actions/ui'
import { viewGlyphs, viewColors } from '../state/actions/settings'
import { fetchRandomApi } from '../state/actions/random'

const GameMenu = ({ glyphsOn, colorsOn, closeMenu, viewGlyphs, viewColors, fetchPool }) => {

  const handler = {
    viewGlyphs: () => viewGlyphs(!glyphsOn),
    viewColors: () => viewColors(!colorsOn),
    restart: () => {
      closeMenu()
      fetchPool()
    },
  }

  return (
    <Modal onClose={closeMenu} right>
      <ModalMenu icon={<FA icon="cogs" />} title="Options">
        <li role="button" onClick={handler.restart}>
          Restart
        </li>

        <li role="button" onClick={handler.viewGlyphs} className={glyphsOn ? 'on' : ''}>
          Glyphs {glyphsOn ? 'on' : 'off'}
        </li>

        <li role="button" onClick={handler.viewColors} className={colorsOn ? 'on' : ''}>
          Colors {colorsOn ? 'on' : 'off'}
        </li>
      </ModalMenu>
    </Modal>
  )
}

const mapState = state => ({
  glyphsOn: state.settings.glyphsOn,
  colorsOn: state.settings.colorsOn,
})

const mapDispatch = dispatch => ({
  closeMenu: () => dispatch(openMenu(false)),
  viewGlyphs: (toggle) => dispatch(viewGlyphs(toggle)),
  viewColors: (toggle) => dispatch(viewColors(toggle)),
  fetchPool: () => dispatch(fetchRandomApi()),
})

export default connect(mapState, mapDispatch)(GameMenu)
