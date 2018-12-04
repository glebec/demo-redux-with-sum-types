import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// customized version of NavLink which styles the `<li>` instead of the `<a>`
const NavLi = ({ location, to, children, activeClassName = 'active' }) => {
	const isActive = !!(location.pathname === to)
	const className = isActive ? activeClassName : null
	return (
		<li className={ className }> {/* This is to support Bulma CSS… */}
			<Link to={ to }>{ children }</Link>
		</li>
	)
}

// connecting our component to the nearest <Router>
const NavLink = withRouter(NavLi)

const Header = () => (
	<section className="hero is-primary is-bold">
		<div className="hero-body">
			<div className="container from-top">
				<h1 id="title" className="title">
					Fancy Cats 🐈
				</h1>
				<h2 className="subtitle">
					Demonstrating React Redux with Style
				</h2>
			</div>
		</div>
		<div className="hero-foot">
			<nav className="tabs is-boxed">
				<div className="container">
					<ul>
						<NavLink to="/" activeClassName="is-active">Home</NavLink>
						<NavLink to="/cats" activeClassName="is-active">Cats</NavLink>
						<NavLink to="/dogs" activeClassName="is-active">Dogs</NavLink>
						<NavLink to="/snakes" activeClassName="is-active">Snakes</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	</section>
)

export default Header
