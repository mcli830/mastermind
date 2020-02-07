import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalMenu from './ModalMenu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openMenu } from '../state/actions/ui'

const Header = ({ menuIsOpen, openMenu, closeMenu }) => {

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
            <ModalMenu>
              <ul>
                {[1,2,3].map((n,i) => (
                  <li key={i}>Item {n}</li>
                ))}
              </ul>
            </ModalMenu>
          </Modal>
        )}
      </ReactCSSTransitionGroup>
    </div>
  )
}

const mapState = state => ({
  menuIsOpen: state.ui.menuOpen,
})

const mapDispatch = dispatch => ({
  openMenu: () => dispatch(openMenu(true)),
  closeMenu: () => dispatch(openMenu(false))
})

export default connect(mapState, mapDispatch)(Header)
