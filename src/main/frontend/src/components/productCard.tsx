import React from 'react';
import { Product } from '../model';
import * as translation from '../locales/pl.json';

export default function ProductCard({ product }: { product: Product }) {
	const price = product.price / 100;
	return (
		<div className="card productCard">
			<img className="productImg card-img-top mx-auto" src={product.image} alt="" />
			<div className="card-body d-flex flex-column">
				<p className="m-0">
					<strong>{product.name}</strong>
				</p>
				<p className="m-0 text-muted">{product.shortDescription}</p>
				<p className="m-0 text-primary">
					{price.toFixed(2)} {translation.currency}
				</p>
			</div>
		</div>
	);
}
