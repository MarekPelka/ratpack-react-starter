import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faShoppingCart,
	faUser,
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Menu() {
	const [ isExpanded, setExpanded ] = useState(true);

	const iconPaddingLeft = 10;
	const empty = '';
	return (
		<aside className="menu section">
			<img src={logo} className="App-logo" alt="logo" />
			<ul className="menu-list">
				<li>
					<Link to="/">
						<span className="icon"><FontAwesomeIcon icon={faHome} /></span>
						{isExpanded && <span style={{ paddingLeft: iconPaddingLeft }}>Home</span>}
					</Link>
				</li>
				<li>
					<Link to="/cart">
						<span className="icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
						{isExpanded && <span style={{ paddingLeft: iconPaddingLeft }}>Cart</span>}
					</Link>
				</li>
				<li>
					<Link to="/user">
						<span className="icon"><FontAwesomeIcon icon={faUser} /></span>
						{isExpanded && <span style={{ paddingLeft: iconPaddingLeft }}>User</span>}
					</Link>
				</li>
				<li>
					<Link to="/product">
						<span className="icon"><FontAwesomeIcon icon={faShoppingBag} /></span>
						{isExpanded && <span style={{ paddingLeft: iconPaddingLeft }}>Product</span>}
					</Link>
				</li>
			</ul>
			<ul className="menu-list menu-bottom">
				<li>
					<a onClick={() => setExpanded(!isExpanded)}>
						<span className="icon"><FontAwesomeIcon icon={isExpanded ? faAngleDoubleLeft : faAngleDoubleRight} /></span>
						<span style={{ paddingLeft: iconPaddingLeft }}>{isExpanded ? 'Hide' : empty}</span>
					</a>
				</li>
			</ul>
		</aside>
	);
}
