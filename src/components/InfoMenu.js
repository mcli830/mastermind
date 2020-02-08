import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalMenu from './ModalMenu'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openInfo } from '../state/actions/ui'
import { glyphDictionary } from '../lib/glyph'

const InfoMenu = ({ closeInfo }) => {
  return (
    <Modal onClose={closeInfo} left>
      <ModalMenu icon={<FA icon="info-circle" />} title="About">
        <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)" target="_blank" rel="noopener noreferrer">
          <li>
            <span className="subheader">About the game</span>
            <span>Mastermind</span>
          </li>
        </a>

        <a href="https://github.com/mcli830" target="_blank" rel="noopener noreferrer">
          <li>
            <span className="subheader">Developer</span>
            <span>Michael Li</span>
          </li>
        </a>

        <li className="subsection noclick">Glyphs</li>
        <div className='columns'>
          {Array.chunk(glyphDictionary).map((col, i) => (
            <div key={i} className='column'>
              {col.map((item, ii) => (
                <a key={ii} href={item.href} target="_blank" rel="noopener noreferrer">
                  <li>
                    <span className="subheader">
                      <strong style={{textTransform: 'none'}}>{item.char}</strong>
                    </span>
                    <span>{item.name}</span>
                  </li>
                </a>
              ))}
            </div>
          ))}
        </div>

      </ModalMenu>
    </Modal>
  )
}

const mapDispatch = dispatch => ({
  closeInfo: () => dispatch(openInfo(false)),
})

export default connect(null, mapDispatch)(InfoMenu)
