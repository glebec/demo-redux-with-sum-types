import { createStore } from 'redux'

console.log('redux module is running')

// ACTION TYPE

const INCREMENT_CLICKED = 'INCREMENT_CLICKED'
const NUMBER_SET = 'NUMBER_SET'

// ACTION CREATOR

export const incrementClicked = () => ({
	type: INCREMENT_CLICKED
})

export const numberSet = (num) => ({
	type: NUMBER_SET,
	num
})

// INITIAL STATE

const initialState = {
	number: 0
}

// REDUCERS

const mainReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case INCREMENT_CLICKED:
			return { number: prevState.number + 1 }
		case NUMBER_SET:
			return { number: action.num }
		default:
			return prevState
	}
}

const store = createStore(mainReducer)

export default store

// USING REDUX IN A SIMULATION

// setInterval(() => {
// 	const actionOnject = incrementClicked()
// 	store.dispatch(actionOnject)
// }, 2000)

store.subscribe(() => {
	const updatedState = store.getState()
	console.log('A state change happened and now the state looks like', updatedState)
})
