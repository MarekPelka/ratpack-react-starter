import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import About from './routes/about';
import Product from './routes/product';
import Menu from './components/menu';

function App() {
	return (
		<Router>
			<div className="columns full-height is-gapless">
				<div className="column is-narrow has-background-white-ter">
					<Menu />
				</div>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/product">
						<Product />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
