import React from 'react'

import History from './History'
import Pool from './Pool'

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <div className="GameBoard-history">
        <History />
      </div>
      <div className="GameBoard-pool">
        <Pool />
      </div>
    </div>
  )
}

export default GameBoard
