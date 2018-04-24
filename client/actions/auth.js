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

const requestUserDetails = () => {
  return {
    type: REQUEST_USER_DETAILS
  }
}

const receiveUserDetails = (userDetails) => {
  return {
    type: RECEIVED_USER_DETAILS,
    userDetails
  }
}

export const logoutUser = () => {
  logOffUser()
  return {
    type: LOG_OFF
  }
}

export const registerUser = (creds) => {
  return (dispatch) => {
    dispatch(requestRegistration())
    return request('post', '/auth/register', creds)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receivedRegistration(res.body))
        dispatch(getUserDetails(token._id))
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

export function getUserDetails (userId) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/users/${userId}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpect error has occurred.'))
      })
  }
}

export function loginUser (user, confirmSuccess) {
  return (dispatch) => {
    dispatch(requestLogin())
    request('post', '/auth/login', user)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receivedLogin(res.body))
        dispatch(getUserDetails(token._id))
        dispatch(clearError())
        confirmSuccess()
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
