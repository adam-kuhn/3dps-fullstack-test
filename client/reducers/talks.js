import {RECEIVED_TALKS, RECEIVED_VOTES} from '../actions/talks'

function talks (state = [], action) {
  switch (action.type) {
    case (RECEIVED_TALKS): {
      return action.talks
    }
    case (RECEIVED_VOTES): {
      console.log('vote talks', action.talks)
      return action.talks
    }
    default:
      return state
  }
}

export default talks
