import React from 'react'
import {connect} from 'react-redux'

import {requestTalks, showSubmit, upVote} from '../actions/talks'
import {logoutUser} from '../actions/auth'

class Talks extends React.Component {
  constructor () {
    super()
    this.goToSubmit = this.goToSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleClick = this.handleClick.bind(this)
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
  handleClick (evt) {
    this.props.dispatch(upVote(evt.target.value))
  }

  render () {
    return (
      <div className='container'>
        <h1 className='item'>Lightning Talks</h1>
        {this.props.talks.length < 1 ? <p>There are no talks yet! Please submit your own by clicking the button below </p>
          : this.props.talks.map(talk => {
            return (
              <div className='talk' key={talk._id}>
                <h3>{talk.title}</h3>
                <p>Description: {talk.description}</p>
                <p>By: {talk.username}</p>
                <p>Votes: {talk.votes}</p>
                <button type='button' value={talk._id} onClick={this.handleClick}>Up Vote!</button>
              </div>
            )
          })}
        <button className='talk-button' type='button' onClick={this.goToSubmit}>Submit A New Talk</button>
        <button className='talk-button' type='button' onClick={this.handleLogout}>Logout</button>
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
