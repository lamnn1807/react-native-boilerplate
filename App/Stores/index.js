import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import { reducer as AppReducer } from './Startup/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    app: AppReducer,
  })

  return configureStore(rootReducer)
}
