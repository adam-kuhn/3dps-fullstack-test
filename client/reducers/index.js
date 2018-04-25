import {combineReducers} from 'redux'
import failLogin from './failLogin'
import showLive from './showLive'
import error from './error'
import talks from './talks'
import display from './display'
export default combineReducers({
  failLogin,
  showLive,
  error,
  talks,
  display
})
