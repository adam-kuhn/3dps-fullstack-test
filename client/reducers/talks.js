import {RECEIVED_TALKS} from '../actions/talks'

function talks (state = [], action) {
  switch (action.type) {
    case (RECEIVED_TALKS): {
      return action.talks
    }
    default:
      return state
  }
}

export default talks
