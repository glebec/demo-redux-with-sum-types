import React from 'react'
import ReactDOM from 'react-dom'

console.log('hello world')

const Main = () => (
	<p>React is Live</p>
)

ReactDOM.render(
	<Main />,
	document.getElementById('app')
)
