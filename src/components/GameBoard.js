import React from 'react'
import BoardMenu from './BoardMenu'
import History from './History'
import Pool from './Pool'

const GameBoard = () => {
  return (
    <div className="GameBoard">

      <div className='GameBoard-actions'>
        <BoardMenu />
      </div>

      <div className='Gameboard-board'>
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

export default GameBoard
