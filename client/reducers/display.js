import {SHOW_SUBMIT, SHOW_TALK} from '../actions/talks'

function display (state = false, action) {
  switch (action.type) {
    case SHOW_SUBMIT: {
      return true
    }
    case SHOW_TALK: {
      return false
    }
    default:
      return state
  }
}

export default display
