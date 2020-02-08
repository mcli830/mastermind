import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Modal from './Modal'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const LoadingScreen = ({ loading }) => {

  return (
    <ReactCSSTransitionGroup
      className="ModalTransitionGroup"
      transitionName="LoadingScreen"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {loading && (
        <Modal center>
          <div className="LoadingScreen">
            <div className="LoadingScreen-icon">
              <figure className="icon-underlay" />
              <figure className="icon-item">
                <FA icon="brain" />
              </figure>
            </div>
            <p>Thinking...</p>
            <figure className="LoadingScreen-spinner">
              <figure /><figure />
            </figure>
          </div>
        </Modal>
      )}
    </ReactCSSTransitionGroup>
  )
}

const mapState = state => ({
  loading: state.game.loading,
})

export default connect(mapState)(LoadingScreen)
