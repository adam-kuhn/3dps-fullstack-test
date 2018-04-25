import React from 'react'
import {connect} from 'react-redux'

import {requestTalks, showSubmit} from '../actions/talks'
import {logoutUser} from '../actions/auth'
class Talks extends React.Component {
  constructor () {
    super()
    this.goToSubmit = this.goToSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(requestTalks())
  }
  goToSubmit () {
    this.props.dispatch(showSubmit())
  }
  handleLogout () {
    this.props.dispatch(logoutUser())
  }

  render () {
    return (
      <div>
        <h1>Lightning Talks</h1>
        {this.props.talks.length < 1 ? <p>There are no talks yet! Please submit your own by clicking the button below </p>
          : this.props.talks.map(talk => {
            return (
              <div key={talk._id}>
                <h2 >{talk.title}</h2>
              </div>
            )
          })}
        <button type='button' onClick={this.goToSubmit}>Submit A New Talk</button>
        <button type='button' onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    talks: state.talks
  }
}

export default connect(mapStateToProps)(Talks)
