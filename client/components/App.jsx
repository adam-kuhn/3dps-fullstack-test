import React from 'react'
import {connect} from 'react-redux'

import Login from './Login'
import LiveApp from './LiveApp'
import {confirmToken, noToken} from '../actions/checkToken'

class App extends React.Component {
  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      this.props.dispatch(confirmToken())
    } else {
      this.props.dispatch(noToken())
    }
  }
  render () {
    return (
      <div>
        {!this.props.showLive && <Login/>}
        {this.props.showLive && <LiveApp/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLive: state.showLive
  }
}

export default connect(mapStateToProps)(App)
