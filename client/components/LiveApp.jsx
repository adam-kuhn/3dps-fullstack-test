import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {requestTalks} from '../actions'
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
    const goToLogin = () => this.props.history.push('/')
    this.props.dispatch(logoutUser(goToLogin))
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

export default withRouter(connect()(LiveApp))
