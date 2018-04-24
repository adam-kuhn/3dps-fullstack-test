import React from 'react'
import {connect} from 'react-redux'

import {requestTalks} from '../actions/talks'
import {logoutUser} from '../actions/auth'
class LiveApp extends React.Component {
  constructor () {
    super()
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(requestTalks())
  }
  handleLogout () {
    this.props.dispatch(logoutUser())
  }

  render () {
    return (
      <div>
        <h1>Lightning Talks</h1>
        <button type='button' onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default connect()(LiveApp)
