import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalMenu from './ModalMenu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openMenu } from '../state/actions/ui'
import { viewGlyphs, viewColors } from '../state/actions/settings'

const Header = ({
  menuIsOpen,
  openMenu,
  closeMenu,
  glyphsOn,
  colorsOn,
  viewGlyphs,
  viewColors,
}) => {

  const handler = {
    viewGlyphs: () => viewGlyphs(!glyphsOn),
    viewColors: () => viewColors(!colorsOn),
  }

  return (
    <div className="Header">
      <button>
        <FA icon="info" />
      </button>
      <h1>
        MASTERMiND
      </h1>
      <button onClick={openMenu}>
        <FA icon="bars" />
      </button>
      <ReactCSSTransitionGroup
        className="ModalTransitionGroup"
        transitionName="GameMenu"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {menuIsOpen && (
          <Modal onClose={closeMenu} right>
            <ModalMenu title="Options">
              <li>
                Restart
              </li>
              <li
                onClick={handler.viewGlyphs}
                className={glyphsOn ? 'on' : ''}
              >
                Glyphs {glyphsOn ? 'on' : 'off'}
              </li>
              <li
                onClick={handler.viewColors}
                className={colorsOn ? 'on' : ''}
              >
                Colors {colorsOn ? 'on' : 'off'}
              </li>
            </ModalMenu>
          </Modal>
        )}
      </ReactCSSTransitionGroup>
    </div>
  )
}

const mapState = state => ({
  menuIsOpen: state.ui.menuOpen,
  glyphsOn: state.settings.glyphsOn,
  colorsOn: state.settings.colorsOn,
})

const mapDispatch = dispatch => ({
  openMenu: () => dispatch(openMenu(true)),
  closeMenu: () => dispatch(openMenu(false)),
  viewGlyphs: (toggle) => dispatch(viewGlyphs(toggle)),
  viewColors: (toggle) => dispatch(viewColors(toggle)),
})

export default connect(mapState, mapDispatch)(Header)
