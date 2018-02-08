import React from 'react'

import store, { fetchCats } from './redux'

class Cats extends React.Component {
	constructor (props) {
		super(props)
		const { cats, fetchingCats } = store.getState()
		this.state = {
			cats,
			fetchingCats,
		}
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe(() => {
			const { cats, fetchingCats } = store.getState()
			this.setState({
				cats,
				fetchingCats,
			})
		})
		store.dispatch(fetchCats())
	}

	componentWillUnmount () {
		this.unsubscribe()
	}

	render () {
		if (this.state.fetchingCats instanceof Error) {
			console.error(this.state.fetchingCats)
			return (<p>Sorry, there was a problem fetching cats.</p>)
		}
		if (this.state.fetchingCats) {
			return (<p>Fetching the kitties!</p>)
		}
		return this.state.cats.length
			? <ul>{
				this.state.cats.map(cat =>
					<li key={cat.id}>{ cat.name }</li>
				)
			}</ul>
			: <p>No kitties...</p>
	}
}

export default Cats
