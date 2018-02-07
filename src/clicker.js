import React from 'react'

import store, { incrementClicked, numberSet } from './redux'

class Clicker extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			number: store.getState().number
		}
		this.handleIncrement = this.handleIncrement.bind(this)
		this.handleSet = this.handleSet.bind(this)
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe(() => {
			const newState = store.getState()
			this.setState({
				number: newState.number
			})
		})
	}

	componentWillUnmount () {
		this.unsubscribe()
	}

	handleIncrement (evt) {
		evt.preventDefault()
		console.log('you clicked the button')
		store.dispatch(incrementClicked())
	}

	handleSet (evt) {
		evt.preventDefault()
		console.log('you submitted the form', +evt.target.val.value)
		store.dispatch(numberSet(+evt.target.val.value))
	}

	render () {
		return (
			<div>
				<p>I am the clicker, coo coo ca choo: {this.state.number}</p>
				<button onClick={this.handleIncrement}>Increment Me!</button>
				<form onSubmit={this.handleSet}>
					<input name="val" />
					<button type="submit">Set Me!</button>
				</form>
			</div>
		)
	}
}

export default Clicker
