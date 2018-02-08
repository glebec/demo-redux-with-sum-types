import React from 'react'
import ReactDOM from 'react-dom'

// demo some redux code
import './redux'

// react components

import Clicker from './clicker'
import Cats from './cats'

console.log('hello world')

const Main = () => (
	<div>
		<p>React is Live</p>
		<Clicker />
		<Cats />
	</div>
)

ReactDOM.render(
	<Main />,
	document.getElementById('app')
)
