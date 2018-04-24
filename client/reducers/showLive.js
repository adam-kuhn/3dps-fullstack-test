// import {LOGIN_SUCCESS} from '../actions/login'
// import {LOGOUT_SUCCESS} from '../actions/logout'
import {TOKEN_SUCCESS} from '../actions/checkToken'
import {RECEIVED_LOGIN, LOG_OFF} from '../actions/auth'

const initialState = false

const showLive = (state = initialState, action) => {
  switch (action.type) {
    case (TOKEN_SUCCESS): {
      return true
    }
    case (RECEIVED_LOGIN): {
      return true
    }
    case (LOG_OFF): {
      return false
    }
    default:
      return state
  }
}

export default showLive
