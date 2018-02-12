
import axios from 'src/utils/fakeAxios'

import types from 'src/redux/constants'
import leaf from 'src/redux/leaf'

// ACTION CREATORS

export const catsViewed = () => ({
	type: types.CATS_VIEWED
})

const catsRequested = () => ({
	type: types.CATS_REQUESTED
})

const catsFetched = (cats) => ({
	type: types.CATS_FETCHED,
	cats
})

const catsFailed = (error) => ({
	type: types.CATS_FAILED,
	error
})

// "thunked" action creator
export const fetchCats = () => async (dispatch) => {
	try {
		dispatch(catsRequested())
		const { data: cats } = await axios.get('/api/cats')
		dispatch(catsFetched(cats))
	} catch (err) {
		console.error(err)
		dispatch(catsFailed(err))
	}
}

// INITIAL STATE

const initialState = leaf.unloaded

// REDUCER

const reducer = (prevState = initialState, action) => {
	switch (action.type) {
		case types.CATS_VIEWED:
			return leaf.unloaded
		case types.CATS_REQUESTED:
			return leaf.loading
		case types.CATS_FETCHED:
			return leaf.loaded(action.cats)
		case types.CATS_FAILED:
			return leaf.failed(action.error)
		default:
			return prevState
	}
}

export default reducer
