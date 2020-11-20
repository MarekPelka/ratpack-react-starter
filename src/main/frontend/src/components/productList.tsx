import React from 'react';
import ProductCard from './productCard';

export default function ProductList() {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3 mb-5">
				<div className="container">
					<span className="navbar-brand">Categories:</span>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#basicExampleNav"
						aria-controls="basicExampleNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="basicExampleNav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									All
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Shirts
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sport wears
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Outwears
								</a>
							</li>
						</ul>

						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
			<div className="container">
				<section className="text-center mb-4">
					<div className="row">
						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>

						<div className="col-lg-3 col-md-6 mb-4">
							<ProductCard />
						</div>
					</div>
				</section>

				<nav className="d-flex justify-content-center">
					<ul className="pagination pg-blue">
						<li className="page-item disabled">
							<a className="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
								<span className="sr-only">Previous</span>
							</a>
						</li>

						<li className="page-item active">
							<a className="page-link" href="#">
								1
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								2
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								3
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								4
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								5
							</a>
						</li>

						<li className="page-item">
							<a className="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
								<span className="sr-only">Next</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</React.Fragment>
	);
}
