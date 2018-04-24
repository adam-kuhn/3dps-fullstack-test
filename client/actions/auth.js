import request from '../../lib/api'
// import {showError, clearError} from './error'
import {saveAuthToken, loggOff as logOffUser} from '../../lib/auth'

export const LOG_OFF = 'LOG_OFF'
export const REQUEST_SIGNIN = 'REQUEST_SIGNIN'
export const RECEIVE_SIGNIN = 'RECEIVE_SIGNIN'
export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION'
export const RECEIVED_REGISTRATION = 'RECEIVED_REGISTRATION'
export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVED_USER_DETAILS = 'RECEIVED_USER_DETAILS'


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
