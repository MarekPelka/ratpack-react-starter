import React, { useState } from 'react';
import ProductCard from './productCard';
import ProductCardHorizontal from './productCardHorizontal';

import { Product } from '../model';
import Modal from './productModal'

export default function ProductList() {
	const categories = [ 'All', 'Shirts', 'Sport wears', 'Outdoor' ];

	const products: Array<Product> = [
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
		{
			id: '1',
			name: 'Gray sweater',
			image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
			shortDescription: 'Lorem ipsum sit dolor amet',
			description: '',
			price: 4500,
		},
	];

	const [productModal, setProductModal] = useState(undefined as Product | undefined)

	return (
		<React.Fragment>
			<Modal product={productModal} hideFunction={setProductModal}/>
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
						{products.map((p) => {
							return (
								<div className="col-lg-3 col-md-6 mb-4">
									<div onClick={() => setProductModal(p)}>
										<ProductCard product={p} />
									</div>
								</div>
							);
						})}
					</div>
					<div className="row">
						<div className="col">
							<ProductCardHorizontal product={products[0]}/>
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