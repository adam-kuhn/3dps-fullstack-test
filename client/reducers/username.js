import {STORE_USERNAME} from '../actions/auth'

function username (state = '', action) {
  switch (action.type) {
    case (STORE_USERNAME) : {
      return action.username
    }
    default:
      return state
  }
}

export default username

