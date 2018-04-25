import request from '../../lib/api'
import {showError, clearError} from './error'
import {saveAuthToken, logOff as logOffUser} from '../../lib/auth'

export const LOG_OFF = 'LOG_OFF'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVED_LOGIN = 'RECEIVED_LOGIN'
export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION'
export const RECEIVED_REGISTRATION = 'RECEIVED_REGISTRATION'
export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVED_USER_DETAILS = 'RECEIVED_USER_DETAILS'
export const STORE_USERNAME = 'STORE_USERNAME'

const requestLogin = () => {
  return {
    type: REQUEST_LOGIN
  }
}

const receivedLogin = (token) => {
  return {
    type: RECEIVED_LOGIN,
    token
  }
}

const requestRegistration = () => {
  return {
    type: REQUEST_REGISTRATION
  }
}
const receivedRegistration = (token) => {
  return {
    type: RECEIVED_REGISTRATION,
    token
  }
}

export const logoutUser = () => {
  logOffUser()
  return {
    type: LOG_OFF
  }
}

export const storeUsername = (username) => {
  return {
    type: STORE_USERNAME,
    username
  }
}

export const registerUser = (creds) => {
  return (dispatch) => {
    dispatch(requestRegistration())
    return request('post', '/auth/register', creds)
      .then(res => {
        dispatch(storeUsername(creds.username))
        saveAuthToken(res.body.token)
        dispatch(receivedRegistration(res.body))
        dispatch(clearError())
      })
      .catch(err => {
        const res = err.response.body
        const msg = 'Username is unavailable'
        if (res && res.errorType === 'USERNAME_UNAVAILABLE') {
          return dispatch(showError(msg))
        }
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function loginUser (user) {
  return (dispatch) => {
    dispatch(requestLogin())
    request('post', '/auth/login', user)
      .then(res => {
        saveAuthToken(res.body.token)
        dispatch(receivedLogin(res.body))
        dispatch(clearError())
      })
      .catch(err => {
        const res = err.response.body
        const msg = 'Username and password don\'t match an existing user'
        if (res && res.errorType === 'INVALID_CREDENTIALS') {
          return dispatch(showError(msg))
        }
        dispatch(showError('An unexpected error has occured.'))
      })
  }
}
