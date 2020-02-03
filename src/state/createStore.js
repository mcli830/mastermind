import { createStore } from 'redux'
import rootReducer from './reducers/root'

export default preloadedState => {
  return createStore(rootReducer, preloadedState)
}
