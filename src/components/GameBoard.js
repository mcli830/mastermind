import React from 'react'
import { connect } from 'react-redux'
import BoardMenu from './BoardMenu'
import History from './History'
import Pool from './Pool'

const GameBoard = ({lefty}) => {
  return (
    <div className="GameBoard">

      <div className='GameBoard-actions'>
        <BoardMenu />
      </div>

      <div className='Gameboard-board' style={{
        flexDirection: lefty ? 'row-reverse' : 'row',
      }}>
        <div className="GameBoard-history">
          <History />
        </div>
        <div className="GameBoard-pool">
          <Pool />
        </div>
      </div>

    </div>
  )
}

const mapState = state => ({
  lefty: state.settings.lefty,
})

export default connect(mapState)(GameBoard)
