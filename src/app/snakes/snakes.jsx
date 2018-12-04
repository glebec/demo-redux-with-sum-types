import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { fetchSnakes, snakesViewed } from './snakes.redux'
// import './snakes.style.scss'

/* eslint-disable react/display-name */
const Snakes = ({ snakes }) => {
	if (snakes.loading) return <p>Loading…</p>
	if (snakes.error) {
		console.error(snakes.error)
		return <p>Sorry, there was a problem fetching snakes: {snakes.error.message}</p>
	}
	return (
		<ul className="box flip-down">
			{
				snakes.data.map(snake => (
					<li key={ snake.id }>{ snake.name }</li>
				))
			}
		</ul>
	)
}
/* eslint-ensable react/display-name */

class SnakesContainer extends React.Component {

	componentDidMount () {
		this.props.snakesViewed()
	}

	render () {
		const isLoading = this.props.snakes.loading
		const className = classNames('button is-primary', {
			'is-loading': isLoading,
		})
		return (
			<div>
				<h2 className="title">Snakes</h2>
				<a
					onClick={ this.props.fetchSnakes }
					className={ className }
					disabled={ isLoading }
				>
					Fetch Snakes
				</a>
				{
					!this.props.snakes.loading
					? <p>Click the button!</p>
					: null
				}
				<Snakes snakes={this.props.snakes} />
			</div>
		)
	}
}

const mapStateToProps = ({ snakes }) => ({ snakes })

const mapDispatchToProps = { fetchSnakes, snakesViewed }

export default connect(mapStateToProps, mapDispatchToProps)(SnakesContainer)
