import React from 'react';
import { Product } from '../model';
import * as translation from '../locales/pl.json';

export default function ProductCardHorizontal({ product }: { product: Product }) {
	const price = product.price / 100;
	return (
		// <div className="card productCard">
		// 	<img className="productImg card-img-top mx-auto" src={product.image} alt="" />
		// 	<div className="card-body d-flex flex-column">
		// 		<p className="m-0">
		// 			<strong>{product.name}</strong>
		// 		</p>
		// 		<p className="m-0 text-muted">{product.shortDescription}</p>
		// 		<p className="m-0 text-primary">
		// 			{price.toFixed(2)} {translation.currency}
		// 		</p>
		// 	</div>
		// </div>
		<div className="card productCard mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img className="card-img productImgHorizontal" src={product.image} alt="" />
				</div>
				<div className="col-md-8 align-self-center">
					<div className="card-body">
						<h5 className="card-title"><strong>{product.name}</strong></h5>
						{/* <p className="card-text">{product.shortDescription}</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>

						<p className="m-0">
							<strong>{product.name}</strong>
						</p> */}
						<p className="m-0 text-muted">{product.shortDescription}</p>
						<p className="m-0 text-primary">
							{price.toFixed(2)} {translation.currency}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
