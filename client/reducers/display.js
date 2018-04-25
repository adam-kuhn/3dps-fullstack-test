import {SHOW_SUBMIT} from '../actions/talks'

function display (state = false, action) {
  switch (action.type) {
    case SHOW_SUBMIT: {
      return true
    }
    default:
      return state
  }
}

export default display
