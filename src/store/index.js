import { configureStore } from '@reduxjs/toolkit'
import filters from '../reducers/filters'
import players from '../reducers/players'
const stringMiddleware = () => next => action => {
	if (typeof action === 'string') {
		return next({ type: action })
	}
	return next(action)
}

const store = configureStore({
	reducer: { players, filters },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(stringMiddleware),
	devTools: true,
})

// Redux DevTools'ga xavfsiz ulanish
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = legacy_createStore(
// 	combineReducers({ players, filters }),
// 	composeEnhancers(applyMiddleware(thunk, stringMiddleware))
// )

export default store
