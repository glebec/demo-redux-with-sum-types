import React from 'react'
import ReactDOM from 'react-dom'

// demo some redux code
import './redux'

// react components

import Clicker from './clicker'

console.log('hello world')

const Main = () => (
	<div>
		<p>React is Live</p>
		<Clicker />
	</div>
)

ReactDOM.render(
	<Main />,
	document.getElementById('app')
)
