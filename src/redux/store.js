import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import catsReducer from 'src/app/cats/cats.redux'
import dogsReducer from 'src/app/dogs/dogs.redux'
import snakesReducer from 'src/app/snakes/snakes.redux'

const mainReducer = combineReducers({
	dogs: dogsReducer,
	cats: catsReducer,
	snakes: snakesReducer,
})

const store = createStore(
	mainReducer,
	composeWithDevTools(applyMiddleware(
		thunk,
		createLogger({ collapsed: true })
	)),
)

export default store
