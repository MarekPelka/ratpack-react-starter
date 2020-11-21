import React from 'react';
import gastronomia from '../gastronomia.jpg';
import produkty from '../produkty.jpg';
import rejestracja from '../rejestracja2.jpg';
import samouczek from '../samouczek.jpg';
import promocje from '../promocje.jpg'
import nowosci from '../nowosci.jpg'


export default function Landing() {
	return (
		<main role="main">
			<section className="jumbotron text-center">
				<div className="container">
					<h1>Kupuj lokalnie</h1>
					<p className="lead text-muted">
						Skorzystaj z lokali usługowych i gastronomicznych, które oferują swoje produkty z dowozem lub na wynos:
					</p>
					<div className="row">
						<div className="col">
							<a className="card mb-4 shadow-sm" href="/shop">
								<img src={produkty} className="card-img-top" />
								{/* <div className="card-body">
									<p className="card-text">Produkty i usługi</p>
								</div> */}
							</a>
						</div>
						{/* <div className="col-md-4" /> */}
						<div className="col">
							<a className="card mb-4 shadow-sm" href="/gastronomia">
								<img src={gastronomia} className="card-img-top" alt="..." />
								{/* <div className="card-body">
									<p className="card-text">Gastronomia</p>
								</div> */}
							</a>
						</div>
					</div>
				</div>
			</section>

			<div className="album py-5 bg-light">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<img src={promocje} className="card-img-top" />
								<div className="card-body">
									
									<h5 className="card-title">
										<strong>Aktualne promocje</strong>
									</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Zobacz
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">
												Najpopularniejsze
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="card mb-4 shadow-sm">
								<img src={nowosci} className="card-img-top" alt="..." />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<a className="card mb-4 shadow-sm" href="/register">
								<img src={rejestracja} className="card-img-top" />
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<a className="card mb-4 shadow-sm" href="/tutorial">
								<img src={samouczek} className="card-img-top" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
