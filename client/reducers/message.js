import {RECEIVED_REGISTRATION, LOG_OFF} from '../actions/auth'

function message (state = '', action) {
  switch (action.type) {
    case (RECEIVED_REGISTRATION): {
      return 'You are registered! Now click Login.'
    }
    case (LOG_OFF): {
      return ''
    }
    default:
      return state
  }
}

export default message
