import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalMenu from './ModalMenu'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openMenu } from '../state/actions/ui'

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
      {menuIsOpen && (
        <Modal>
          <ModalMenu>
            <ul>
              {[1,2,3].map((n,i) => (
                <li key={i}>Item {n}</li>
              ))}
            </ul>
          </ModalMenu>
        </Modal>
      )}
    </div>
  )
}

const mapState = state => ({
  menuIsOpen: state.ui.menuOpen,
})

const mapDispatch = dispatch => ({
  openMenu: () => dispatch(openMenu(true))
})

export default connect(mapState, mapDispatch)(Header)
