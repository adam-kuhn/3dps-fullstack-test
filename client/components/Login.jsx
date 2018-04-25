import React from 'react'
import {connect} from 'react-redux'

import {loginUser, registerUser} from '../actions/auth'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  handleLogin () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    const goToLiveApp = () => this.props.history.push('/lightning-talks')
    this.props.dispatch(loginUser(creds, goToLiveApp))
  }

  handleRegister () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.dispatch(registerUser(creds))
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
        <p>{this.props.errorMessage}</p>
        <p>{this.props.registerMessage}</p>
        <button type='button' onClick={this.handleLogin}>Login</button>
        <button type='button' onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.error.errorMessage,
    registerMessage: state.message
  }
}

export default connect(mapStateToProps)(Login)
