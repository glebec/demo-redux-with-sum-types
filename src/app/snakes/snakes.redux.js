
import axios from 'src/utils/fakeAxios'

import types from 'src/redux/constants'

// ACTION CREATORS

export const snakesViewed = () => ({
	type: types.SNAKES_VIEWED
})

const snakesRequested = () => ({
	type: types.SNAKES_REQUESTED
})

const snakesFetched = (snakes) => ({
	type: types.SNAKES_FETCHED,
	snakes
})

const snakesFailed = (error) => ({
	type: types.SNAKES_FAILED,
	error
})

// "thunked" action creator
export const fetchSnakes = () => async (dispatch) => {
	try {
		dispatch(snakesRequested())
		const { data: snakes } = await axios.get('/api/snakes')
		dispatch(snakesFetched(snakes))
	} catch (err) {
		dispatch(snakesFailed(err))
	}
}

// INITIAL STATE

const initialState = {
	loading: false,
	data: []
}

// REDUCER

const reducer = (prevState = initialState, action) => {
	switch (action.type) {
		case types.SNAKES_VIEWED:
			return prevState
		case types.SNAKES_REQUESTED:
			return { loading: true, data: [], error: undefined }
		case types.SNAKES_FETCHED:
			return { loading: false, data: action.snakes, error: undefined }
		case types.SNAKES_FAILED:
			return { loading: false, data: [], error: action.error }
		default:
			return prevState
	}
}

export default reducer
