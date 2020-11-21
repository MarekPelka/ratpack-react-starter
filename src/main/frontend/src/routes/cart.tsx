import React from 'react';

export default function Cart() {
	return (
		<div className="container-fluid bg-light h-100">
			<div className="container pt-3">
				<h1>Koszyk</h1>
				<div className="row">
					<div className="col-8">
						<div className="card mb-3">
							<div className="row no-gutters">
								<div className="col-md-4">
									<img className="card-img productImgHorizontal" src="" alt="" />
								</div>
								<div className="col-md-8 align-self-center">
									<div className="card-body">
										<h5 className="card-title">
											<strong>Name</strong>
										</h5>
										<p className="m-0 text-muted">product.shortDescription</p>
										<p className="m-0 text-primary">1000</p>
									</div>
								</div>
							</div>
						</div>
												<div className="card mb-3">
							<div className="row no-gutters">
								<div className="col-md-4">
									<img className="card-img productImgHorizontal" src="" alt="" />
								</div>
								<div className="col-md-8 align-self-center">
									<div className="card-body">
										<h5 className="card-title">
											<strong>Name</strong>
										</h5>
										<p className="m-0 text-muted">product.shortDescription</p>
										<p className="m-0 text-primary">1000</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img className="card-img-top mx-auto" src="" alt="" />
							<div className="card-body d-flex flex-column">
								<p className="m-0">
									<strong>product.name</strong>
								</p>
								<p className="m-0 text-muted">product.shortDescription</p>
								<p className="m-0 text-primary" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
