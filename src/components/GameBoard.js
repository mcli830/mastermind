import React from 'react'

import Sheet from './Sheet'
import Pool from './Pool'

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <div className="GameBoard-sheet">
        <Sheet />
      </div>
      <div className="GameBoard-pool">
        <Pool />
      </div>
    </div>
  )
}

export default GameBoard
