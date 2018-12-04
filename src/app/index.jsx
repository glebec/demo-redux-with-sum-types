import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './header'
import Home from './home'
import Cats from './cats'
import Dogs from './dogs'
import Snakes from './snakes'
import BulmaBox from './bulma-box'

// Higher-Order Component (function which takes & returns components)
const fromRight = SomeComp => {
	const hoc = props => (
		<div className="from-right-fast"> {/* activates CSS animation */}
			<SomeComp { ...props } />
		</div>
	)
	// React prefers components to have a name, for debugging reasons
	hoc.displayName = `fromRight(${SomeComp.displayName || SomeComp.name}`
	return hoc
}

const App = () => (
	<Router>
		<div>
			<Header />
			<BulmaBox>
				<Route exact path="/" component={ fromRight(Home) } />
				<Route path="/cats" component={ fromRight(Cats) } />
				<Route path="/dogs" component={ fromRight(Dogs) } />
				<Route path="/snakes" component={ fromRight(Snakes) } />
			</BulmaBox>
		</div>
	</Router>
)

export default App
