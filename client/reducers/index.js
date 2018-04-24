import {combineReducers} from 'redux'
import failLogin from './failLogin'
import showLive from './showLive'
import error from './error'
export default combineReducers({
  failLogin,
  showLive,
  error
})
