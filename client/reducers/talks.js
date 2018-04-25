import {RECEIVED_TALKS, RECEIVED_VOTES} from '../actions/talks'

function compare (a, b) {
  if (a.votes > b.votes) {
    return -1
  }
  if (a.votes < b.votes) {
    return 1
  }
  return 0
}

function talks (state = [], action) {
  switch (action.type) {
    case (RECEIVED_TALKS): {
      return action.talks
    }
    case (RECEIVED_VOTES): {
      return action.talks.sort(compare)
    }
    default:
      return state
  }
}

export default talks
