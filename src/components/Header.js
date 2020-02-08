import React from 'react'
import { connect } from 'react-redux'
import GameMenu from './GameMenu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openMenu } from '../state/actions/ui'
import { viewGlyphs, viewColors } from '../state/actions/settings'
import { fetchRandomApi } from '../state/actions/random'

const Header = ({ menuIsOpen, openMenu }) => {

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
        {menuIsOpen && <GameMenu />}
      </ReactCSSTransitionGroup>
    </div>
  )
}

const mapState = state => ({
  menuIsOpen: state.ui.menuOpen,
})

const mapDispatch = dispatch => ({
  openMenu: () => dispatch(openMenu(true)),
})

export default connect(mapState, mapDispatch)(Header)
