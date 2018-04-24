import {SHOW_ERROR, CLEAR_ERROR} from '../actions/error'

const initialState = {
  errorMessage: ''
}

function error (state = initialState, action) {
  switch (action.type) {
    case (SHOW_ERROR): {
      return {
        errorMessage: action.errorMessage
      }
    }
    case (CLEAR_ERROR): {
      return {
        errorMessage: ''
      }
    }
    default:
      return state
  }
}

export default error
