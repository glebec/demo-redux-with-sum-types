import React from 'react'
import ReactDOM from 'react-dom'

// demo some redux code
import './redux'

console.log('hello world')

const Main = () => (
	<p>React is Live</p>
)

ReactDOM.render(
	<Main />,
	document.getElementById('app')
)
