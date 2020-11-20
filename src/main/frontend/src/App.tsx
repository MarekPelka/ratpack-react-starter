import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import 'bootstrap';

import About from './routes/about';
import Product from './routes/product';
// import Menu from './components/menu';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Footer from './components/footer'


function App() {
	return (
		<Router>
			<Navbar />
			{/* <div className="columns full-height is-gapless">
				<div className="column is-narrow has-background-white-ter">
					<Menu />
				</div> */}
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/product">
						<Product />
					</Route>
					<Route path="/productList">
						<ProductList />
					</Route>
				</Switch>
			<Footer />
		</Router>
	);
}

export default App;
