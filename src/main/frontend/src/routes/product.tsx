import React from 'react';
import logo from '../logo.svg';
import Rating from '../components/rating';

export default function Product() {
	return (
		<React.Fragment>
			<div className="column is-two-fifths">
				<div className="columns is-vcentered height-75">
					<div className="column">
						<Rating rating={4.26} hideText={true} />
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</div>
			</div>
			<div className="column has-background-light">
				<section className="hero product-description">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">Product name</h1>
							<h2 className="subtitle">Simple description</h2>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ultrices risus.
								Pellentesque hendrerit varius nulla at finibus. Duis semper purus lacus, et feugiat urna
								malesuada quis. Sed hendrerit mollis tortor quis commodo. Nunc posuere augue diam.
								Quisque vulputate, turpis nec accumsan finibus, urna sem condimentum tortor, nec aliquet
								libero orci id mi. Proin consectetur risus lorem, posuere dignissim massa rutrum vitae.
								Cras sit amet iaculis lorem. Vivamus mauris massa, rhoncus sed posuere quis, mollis
								vitae ligula.
							</span>
						</div>
					</div>
				</section>
				<section className="section">
					<nav className="level">
						<div className="level-left">
							<div className="level-item">
								<div>
									<p className="heading">Price</p>
									<span className="has-text-primary has-text-weight-bold is-size-4">100 PLN</span>
									<s style={{ paddingLeft: 50 }}>1000 PLN</s>
								</div>
							</div>
						</div>

						<div className="level-right">
							<div className="level-item">
								<div>
									<p className="heading">QUANTITY</p>
									<div className="buttons">
										<div className="tags are-large has-addons" style={{ marginBottom: 0 }}>
											<a className="tag is-white is-rounded">-</a>
											<span className="tag is-white is-rounded">1</span>
											<a className="tag is-white is-rounded">+</a>
										</div>
										<button style={{ margin: 10 }} className="button is-primary is-rounded">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</section>
				<div className="footer column-footer">Column footer</div>
			</div>
		</React.Fragment>
	);
}
