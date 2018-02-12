import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// styles
import './style.scss'

// redux
import store from './redux/store'

// react
import App from './app'

// liftoff
ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
)
