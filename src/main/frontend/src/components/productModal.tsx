import React, { useState } from 'react';
import { Product } from '../model';
import * as translation from '../locales/pl.json';
import Rating from './rating';

export default function Modal({
	product,
	hideFunction,
}: {
	product: Product | undefined;
	hideFunction: (a: undefined) => void;
}) {
	return product ? (
		<div
			className="modal fade show"
			id="exampleModal"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			style={{ display: 'block' }}
			onClick={() => hideFunction(undefined)}>
			<div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							{product.name}
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => hideFunction(undefined)}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col-lg-4 col-md-6 mb-4">
								<img className="img-fluid" src={product.image} alt="" />
							</div>
							<div className="col">
								<p>{product.description}</p>
								<div className="row justify-content-md-start" style={{ whiteSpace: 'nowrap' }}>
									
									<Rating rating={4.26} hideText={true} />
									
									4.56/5
									
								</div>
								
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<div className="col-3">
							<input
								type="number"
								defaultValue="1"
								min="0"
								aria-label="Search"
								className="form-control"
							/>
						</div>
						<button
							className="btn btn-primary btn-md my-0 p"
							type="submit"
							style={{ whiteSpace: 'nowrap' }}>
							{translation.addToCart}
							<i className="fas fa-shopping-cart ml-1" />
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div />
	);
}
