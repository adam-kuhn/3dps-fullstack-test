import React from 'react'
import {connect} from 'react-redux'

import {submitTalk} from '../actions/talks'

class SubmitTalks extends React.Component {
  constructor () {
    super()
    this.state = {
      username: false,
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleClick () {
    this.props.dispatch(submitTalk(this.state))
  }
  render () {
    return (
      <div>
        <h3>submit your talks below</h3>
        <label>Username:
          <input onChange={this.handleChange} name='username'
            value={this.state.username || this.props.username}/>
        </label>
        <label>Title:
          <input onChange={this.handleChange} name='title'
            value={this.state.title}/>
        </label>
        <label>Description:
          <input onChange={this.handleChange} name='description'
            value={this.state.description}/>
        </label>
        <button type='button' onClick={this.handleClick}>Submit Talk</button>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(SubmitTalks)
