import React from 'react'
// import request from 'superagent'
import {connect} from 'react-redux'

import {requestTalks} from '../actions'
class LiveApp extends React.Component {
  componentDidMount () {
    this.props.dispatch(requestTalks())
  }
  render () {
    return (
      <h1>Lightning Talks</h1>
    )
  }
}

export default connect()(LiveApp)
