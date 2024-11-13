import { combineReducers, legacy_createStore } from 'redux'
import filters from '../reducers/filters'
import players from '../reducers/players'

const store = legacy_createStore(
	combineReducers({players, filters}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
