import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import leaf from 'src/redux/leaf'

import { fetchDogs, dogsViewed } from './dogs.redux'
import './dogs.style.scss'

/* eslint-disable react/display-name */
const Dogs = ({ dogs }) => dogs.cata({
	unloaded: () => null,
	loading: () => (<p>Loading…</p>),
	loaded: loadedDogs => (
		<ul className="box flip-down">
			{
				loadedDogs.map(dog => (
					<li key={ dog.id }>{ dog.name }</li>
				))
			}
		</ul>
	),
	failed: error => {
		console.error(error)
		return <p>Sorry, there was a problem fetching dogs</p>
	},
})
/* eslint-ensable react/display-name */

class DogsContainer extends React.Component {

	componentDidMount () {
		this.props.dogsViewed()
	}

	render () {
		const isLoading = leaf.loading.is(this.props.dogs)
		const className = classNames('button is-primary', {
			'is-loading': isLoading,
		})
		return (
			<div>
				<h2 className="title">Dogs</h2>
				<a
					onClick={ this.props.fetchDogs }
					className={ className }
					disabled={ isLoading }
				>
					Fetch Dogs
				</a>
				{
					leaf.unloaded.is(this.props.dogs)
					? <p>Click the button!</p>
					: null
				}
				<Dogs dogs={this.props.dogs} />
			</div>
		)
	}
}

const mapStateToProps = ({ dogs }) => ({ dogs })

const mapDispatchToProps = { fetchDogs, dogsViewed }

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer)
