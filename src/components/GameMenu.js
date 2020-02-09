import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalMenu from './ModalMenu'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openMenu } from '../state/actions/ui'
import { changeGlyphSet, viewColors } from '../state/actions/settings'
import { fetchRandomApi } from '../state/actions/random'

const GameMenu = ({ glyphSet, changeGlyphSet, colorsOn, viewColors, closeMenu,fetchPool }) => {

  const handler = {
    setNumberGlyphs: () => changeGlyphSet('number'),
    setGreekGlyphs: () => changeGlyphSet('greek'),
    setEgyptianGlyphs: () => changeGlyphSet('egyptian'),
    setAnimalGlyphs: () => changeGlyphSet('animal'),
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
        
        <li role="button" onClick={handler.viewColors} className={colorsOn ? 'on' : ''}>
          Colors {colorsOn ? 'on' : 'off'}
        </li>

        <li className="subsection noclick">Glyphs</li>

        <li role="button" onClick={handler.setNumberGlyphs} className={glyphSet === 'number' ? 'on' : ''}>
          Numbers
        </li>
        <li role="button" onClick={handler.setGreekGlyphs} className={glyphSet === 'greek' ? 'on' : ''}>
          Greek
        </li>
        <li role="button" onClick={handler.setEgyptianGlyphs} className={glyphSet === 'egyptian' ? 'on' : ''}>
          Egyptian
        </li>
        <li role="button" onClick={handler.setAnimalGlyphs} className={glyphSet === 'animal' ? 'on' : ''}>
          Animal
        </li>

      </ModalMenu>
    </Modal>
  )
}

const mapState = state => ({
  glyphSet: state.settings.glyphSet,
  colorsOn: state.settings.colorsOn,
})

const mapDispatch = dispatch => ({
  closeMenu: () => dispatch(openMenu(false)),
  changeGlyphSet: (set) => dispatch(changeGlyphSet(set)),
  viewColors: (toggle) => dispatch(viewColors(toggle)),
  fetchPool: () => dispatch(fetchRandomApi()),
})

export default connect(mapState, mapDispatch)(GameMenu)
