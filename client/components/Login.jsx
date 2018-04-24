import React from 'react'
import {connect} from 'react-redux'

// import {loginUser} from 

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  handleClick () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    // const goToLiveApp = () => this.props.history.push('/LiveApp')
    // this.props.loginUser(creds, goToLiveApp)
  }

  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.handleClick()
    }
  }
  render () {
    const {username, password} = this.state
    return (
      <div>
        <input onChange={this.handleChange} name='username'
          placeholder='Username' value={username} />
        <input placeholder='Password' type='password' name='password'
          onChange={this.handleChange} autoComplete='off' value={password} />
        <button type='button' onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default connect()(Login)
