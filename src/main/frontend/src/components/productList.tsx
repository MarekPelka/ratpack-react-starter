import React, { useState } from 'react';
import ProductCard from './productCard';
import ProductCardHorizontal from './productCardHorizontal';

import { Product } from '../model';
import Modal from './productModal';
import restauracjaLogo from '../restauracja.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import pizza1 from '../pizza1.jpg'
import pizza2 from '../pizza2.jpg'
import pizza3 from '../pizza3.jpg'
import pizza4 from '../pizza4.jpg'
import pizza5 from '../pizza5.jpg'

export default function ProductList() {
	const categories = [ 'Wszystkie', 'Pizza', 'Makarony', 'Desery' ];

	const products: Array<Product> = [
		{
			id: '1',
			name: 'Pizza Margherita',
			image: pizza1,
			shortDescription: 'ser mozzarella, sos pomidorowy, oregano',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
			price: 2000,
		},
		{
			id: '1',
			name: 'Pizza Vegetariana',
			image: pizza5,
			shortDescription: 'marynowane warzywa: cukinia, papryka, czerwona cebula, ser mozza-rella, sos pomidorowy, oregano',
			description: '',
			price: 2400,
		},
		{
			id: '1',
			name: 'Pizza Bianca',
			image: pizza3,
			shortDescription: 'biały sos, pieczarki, ser mozzarella, gruszka, ser kozi, rukola, parmezan',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
			price: 2600,
		},
		{
			id: '1',
			name: 'Pizza Funghi',
			image: pizza2,
			shortDescription: 'pieczarki, ser mozzarella, sos pomidorowy, oregano',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
			price: 2200,
		},

		{
			id: '1',
			name: 'Pizza Marinara',
			image: pizza4,
			shortDescription: 'kurczak marynowany, ser mozzarella, czosnek, sos pomidorowy, ore-gano',
			description: '',
			price: 2700,
		},

		{
			id: '1',
			name: 'Some Pizza',
			image: '/api/file/get?id=1',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Some Pizza',
			image: '/api/file/get?id=2',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Some Pizza',
			image: '/api/file/get?id=3',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Some Pizza',
			image: '/api/file/get?id=4',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Some Pizza',
			image: '/api/file/get?id=5',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
	];

	const [ productModal, setProductModal ] = useState(undefined as Product | undefined);
	const widths = [ 1, 3, 1, 2, 1, 2, 2, 3, 1, 1, 1, 2, 1, 2, 1 ];

	const getWindowDimensions = () => {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	};

	return (
		<React.Fragment>
			<Modal product={productModal} hideFunction={setProductModal} />
			<div className="container-fluid bgImage">
				<div className="container">
					<section className="pt-3 mb-4">
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4">
								<a className="card mb-4 shadow-sm" href="/register">
									<img src={restauracjaLogo} className="card-img-top" />
								</a>
							</div>
							<div className="col-lg-1 col-md-6 mb-4" />
							<div className="col">
								<h5>
									<strong>Restauracja Toskania</strong>
								</h5>

								<p>
									ul. Warowna 25<br />
									73-110 Stargard<br />
									Tel. 91 834 03 48
								</p>
								<p>Od 30 zł dowóz na terenie Stargardu gratis.</p>
							</div>
							<div className="col">
								<p>
									Godziny otwarcia<br />
									poniedziałek – zamknięte<br />
									wtorek-czwartek 12.00 – 20.00<br />
									piątek – sobota 12.00 – 21.00<br />
									niedziela 12.00 – 19.00
								</p>
							</div>
						</div>
						<div className="row text-center">
							<div className="col">
								<h5>
									<strong>Zadzwoń</strong>
								</h5>
								<div className="text-danger">
									<FontAwesomeIcon icon={faPhoneAlt} size="3x" />
								</div>
							</div>
							<div className="col">
								<h5>
									<strong>Odwiedź stronę</strong>
								</h5>
								<div className="text-danger">
									<FontAwesomeIcon icon={faGlobeAfrica} size="3x" />
								</div>
							</div>
							<div className="col">
								<h5>
									<strong>Facebook</strong>
								</h5>
								<div className="text-primary">
									<FontAwesomeIcon icon={faFacebook} size="3x" />
								</div>
							</div>
						</div>
						<div className="row pt-4">
							<div className="col-md-6">
								<div className="card mb-4 shadow-sm">
									<img src="" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">
											<strong>Program lojalnościowy</strong>
										</h5>
										<p className="card-text">
											Mamy tutaj bardzo dużo bardzo wypasionych promocji. Kilka chwil i miliony
											zaoszczędzone
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card mb-4 shadow-sm">
									<img src="" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">
											<strong>Aktualne promocje</strong>
										</h5>
										<p className="card-text">
											Mamy tutaj bardzo dużo bardzo wypasionych promocji. Kilka chwil i miliony
											zaoszczędzone
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
				<div className="container">
					<span className="navbar-brand">Kategorie:</span>

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
							{categories.map((c) => {
								return (
									<li className="nav-item">
										<a className="nav-link" href="#">
											{c}
										</a>
									</li>
								);
							})}
						</ul>

						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Szukaj"
								aria-label="Search"
							/>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit">
								Szukaj
							</button>
						</form>
					</div>
				</div>
			</nav>
			<div className="container">
				<section className="text-center mb-4">
					<div className="row">
						{products.map((p, index) => {
							const selectedWidth = widths[index] ? widths[index] : 1;
							if (selectedWidth === 1 || getWindowDimensions().width < 1200) {
								return (
									<div className={'col-lg-3 col-md-6 mb-4'}>
										<div onClick={() => setProductModal(p)}>
											<ProductCard product={p} />
										</div>
									</div>
								);
							} else {
								const width = `col-lg-${selectedWidth * 3}`;
								return (
									<div className={width + ' col-md-6 mb-4'}>
										<div onClick={() => setProductModal(p)}>
											<ProductCardHorizontal product={p} />
										</div>
									</div>
								);
							}
						})}
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
