import React from 'react'
import {connect} from 'react-redux'

class SubmitTalks extends React.Component {
  constructor () {
    super()
    this.state = {
      username: false,
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
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
