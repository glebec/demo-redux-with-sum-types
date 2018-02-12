import React from 'react'
import { connect } from 'react-redux'

import { fetchCats, catsViewed } from './cats.redux'
import './cats.style.scss'

const DEMO_DELAYED_FETCH = false

const CatsList = ({ cats }) => (cats.length
	? (
		<div>
			<h2 className="title">Cats</h2>
			<ul>{
				cats.map(cat =>
					<li key={cat.id}><p className="pop">{ cat.name }</p></li>
				)}
			</ul>
		</div>
	)
	: <p>No kitties...</p>
)

/* eslint-disable react/display-name */
const Cats = props => props.cats.cata({
	unloaded: () => (
		<p>Have not requested kitties yet.</p>
	),
	loading: () => (
		<p className="pulsing">Fetching the kitties!</p>
	),
	loaded: cats => (
		<CatsList cats={ cats } />
	),
	failed: err => (
		<article className="message is-warning nono">
			<div className="message-header">
				<p>Sorry, there was a problem fetching cats</p>
			</div>
			<div className="message-body">
				{err.message}
			</div>
		</article>
	),
})
/* eslint-enable react/display-name */

class CatsContainer extends React.Component {

	componentDidMount () {
		if (DEMO_DELAYED_FETCH) {
			this.props.catsViewed()
			setTimeout(() => {
				this.props.fetchCats()
			}, 1500)
		} else {
			this.props.fetchCats()
		}
	}

	render () {
		return (
			<Cats cats={ this.props.cats } />
		)
	}

}

const mapStateToProps = ({ cats }) => ({ cats })

const mapDispatchToProps = { fetchCats, catsViewed }

export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
