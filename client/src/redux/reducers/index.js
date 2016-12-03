import { combineReducers } from 'redux'
import { token } from './auth'
import { appData } from './appData'

const ReduxReactRailsApp = combineReducers({
  token,
  appData
})

export default ReduxReactRailsApp
