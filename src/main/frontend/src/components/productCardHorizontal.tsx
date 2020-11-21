import React from 'react';
import { Product } from '../model';
import * as translation from '../locales/pl.json';

export default function ProductCardHorizontal({ product }: { product: Product }) {
	const price = product.price / 100;
	return (
		<div className="card productCard mb-3">
			<div className="row no-gutters h-100">
				<div className="col-md-5">
					<div
						style={{
							overflow: 'hidden',
							backgroundImage: `url(${product.image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
				<div className="col-md-7 align-self-center">
					<div className="card-body">
						<h5 className="card-title">
							<strong>{product.name}</strong>
						</h5>
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
