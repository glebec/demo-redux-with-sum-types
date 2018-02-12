
import axios from 'src/utils/fakeAxios'

import types from 'src/redux/constants'
import leaf from 'src/redux/leaf'

// ACTION CREATORS

export const dogsViewed = () => ({
	type: types.DOGS_VIEWED
})

const dogsRequested = () => ({
	type: types.DOGS_REQUESTED
})

const dogsFetched = (dogs) => ({
	type: types.DOGS_FETCHED,
	dogs
})

const dogsFailed = (error) => ({
	type: types.DOGS_FAILED,
	error
})

// "thunked" action creator
export const fetchDogs = () => async (dispatch) => {
	try {
		dispatch(dogsRequested())
		const { data: dogs } = await axios.get('/api/dogs')
		dispatch(dogsFetched(dogs))
	} catch (err) {
		dispatch(dogsFailed(err))
	}
}

// INITIAL STATE

const initialState = leaf.unloaded

// REDUCER

const reducer = (prevState = initialState, action) => {
	switch (action.type) {
		case types.DOGS_VIEWED:
			return leaf.unloaded
		case types.DOGS_REQUESTED:
			return leaf.loading
		case types.DOGS_FETCHED:
			return leaf.loaded(action.dogs)
		case types.DOGS_FAILED:
			return leaf.failed(action.error)
		default:
			return prevState
	}
}

export default reducer
