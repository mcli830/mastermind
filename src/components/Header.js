import React from 'react'
import { connect } from 'react-redux'
import InfoMenu from './InfoMenu'
import GameMenu from './GameMenu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openInfo, openMenu } from '../state/actions/ui'
import { viewGlyphs, viewColors } from '../state/actions/settings'
import { fetchRandomApi } from '../state/actions/random'

const Header = ({ infoIsOpen, openInfo, menuIsOpen, openMenu }) => {

  return (
    <div className="Header">
      <button onClick={openInfo}>
        <FA icon="info" />
      </button>
      <h1>
        MASTERMiND
      </h1>
      <button onClick={openMenu}>
        <FA icon="cog" />
      </button>

      <ReactCSSTransitionGroup
        className="ModalTransitionGroup"
        transitionName="InfoMenu"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {infoIsOpen && <InfoMenu />}
      </ReactCSSTransitionGroup>

      <ReactCSSTransitionGroup
        className="ModalTransitionGroup"
        transitionName="GameMenu"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {menuIsOpen && <GameMenu />}
      </ReactCSSTransitionGroup>
    </div>
  )
}

const mapState = state => ({
  infoIsOpen: state.ui.infoIsOpen,
  menuIsOpen: state.ui.menuIsOpen,
})

const mapDispatch = dispatch => ({
  openInfo: () => dispatch(openInfo(true)),
  openMenu: () => dispatch(openMenu(true)),
})

export default connect(mapState, mapDispatch)(Header)
