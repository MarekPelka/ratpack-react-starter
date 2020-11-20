import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	const links = [
		{
			name: 'Home',
			link: '/',
		}, {
			name: 'Product',
			link: '/product',
		}, {
			name: 'Product list',
			link: '/productList',
		}, {
			name: 'Rejstracja',
			link: '/register',
		},{
			name: 'About',
			link: '/about',
		}
	];
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white scrolling-navbar">
			<div className="container">
				<a className="navbar-brand" href="/">
					<strong>Targowisko</strong>
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{ links.map(l => {
							return (
								<li className="nav-item">
									<a className="nav-link" href={ l.link }>
										{ l.name }
									</a>
								</li>
							);
						}) }
					</ul>

					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link">
								<span className="badge badge-pill badge-danger">1</span>
								<FontAwesomeIcon icon={faShoppingCart} />
								<span> Cart </span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
