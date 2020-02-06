import React from 'react'
import { connect } from 'react-redux'
import Record from './Record'

const History = ({ history }) => {

  return (
    <div className="History">
      {history.map((d,i) => (
        <Record key={i} sequence={d.sequence} result={d.result} />
      ))}
      {history.length < 1 && (
        <div className='overlay flex-center'>
          <h2 className="title is-3 letterpress uppercase has-text-centered">
            History
          </h2>
        </div>
      )}
    </div>
  )
}

const mapState = state => ({
  history: state.game.history
})

export default connect(mapState)(History)
