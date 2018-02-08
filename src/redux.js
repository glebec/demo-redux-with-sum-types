import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import axios from './fakeAxios'

console.log('redux module is running')

// ACTION TYPES

const INCREMENT_CLICKED = 'INCREMENT_CLICKED'
const NUMBER_SET = 'NUMBER_SET'

const FETCHING_CATS = 'FETCH_CATS'
const CATS_FETCHED = 'CATS_FETCHED'
const CATS_FAILED = 'CATS_FAILED'

// ACTION CREATORS

export const incrementClicked = () => ({
	type: INCREMENT_CLICKED
})

export const numberSet = (num) => ({
	type: NUMBER_SET,
	num
})

const fetchingCats = () => ({
	type: FETCHING_CATS
})

const catsFetched = (cats) => ({
	type: CATS_FETCHED,
	cats
})

const catsFailed = (err) => ({
	type: CATS_FAILED,
	err
})

// "thunked" action creator
export const fetchCats = () => (dispatch) => {
	dispatch(fetchingCats())
	axios.get('/api/cats')
	.then(res => res.data)
	.then(cats => dispatch(catsFetched(cats)))
	.catch(err => dispatch(catsFailed(err)))
}

// INITIAL STATE

const initialState = {
	number: 0,
	cats: [],
	fetchingCats: false,
}

// REDUCERS

const mainReducer = (prevState = initialState, action) => {
	switch (action.type) {
		// clicker
		case INCREMENT_CLICKED:
			return { ...prevState, number: prevState.number + 1 }
		case NUMBER_SET:
			return { ...prevState, number: action.num }
		// cats
		case FETCHING_CATS:
			return { ...prevState, fetchingCats: true, cats: [] }
		case CATS_FETCHED:
			return { ...prevState, fetchingCats: false, cats: action.cats }
		case CATS_FAILED:
			return { ...prevState, fetchingCats: action.err }
		// action type did not match
		default:
			return prevState
	}
}

const store = createStore(
	mainReducer,
	composeWithDevTools(applyMiddleware(
		thunk,
		createLogger({ collapsed: true })
	)),
)

export default store

// USING REDUX IN A SIMULATION

// setInterval(() => {
// 	const actionOnject = incrementClicked()
// 	store.dispatch(actionOnject)
// }, 2000)

// store.subscribe(() => {
// 	const updatedState = store.getState()
// 	console.log('A state change happened and now the state looks like', updatedState)
// })
