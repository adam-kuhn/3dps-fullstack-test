import {combineReducers} from 'redux'
import failLogin from './failLogin'
import showLive from './showLive'
export default combineReducers({
  failLogin,
  showLive
})
