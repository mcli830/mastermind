import React from 'react'
import { connect } from 'react-redux'
import Record from './Record'

const Sheet = ({ history }) => {

  return (
    <div className="Sheet">
      {history.map((d,i) => (
        <Record key={i} sequence={d.sequence} result={d.result} />
      ))}
    </div>
  )
}

const mapState = state => ({
  history: state.game.history
})

export default connect(mapState)(Sheet)
