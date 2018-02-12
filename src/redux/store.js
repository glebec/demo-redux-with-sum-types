import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import catsReducer from 'src/app/cats/cats.redux'
import dogsReducer from 'src/app/dogs/dogs.redux'

const mainReducer = combineReducers({
	dogs: dogsReducer,
	cats: catsReducer,
})

const store = createStore(
	mainReducer,
	composeWithDevTools(applyMiddleware(
		thunk,
		createLogger({ collapsed: true })
	)),
)

export default store
