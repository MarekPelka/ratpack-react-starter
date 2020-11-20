import React from 'react';

export default function ProductCard() {
	// <div className="card">
	// 	<div className="view overlay">
	// 		<img
	// 			src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
	// 			className="card-img-top"
	// 			alt=""
	// 		/>
	// 		<a>
	// 			<div className="mask rgba-white-slight" />
	// 		</a>
	// 	</div>

	// 	<div className="card-body text-center">
	// 		<a href="" className="grey-text">
	// 			<h5>Sport wear</h5>
	// 		</a>
	// 		<h5>
	// 			<strong>
	// 				<a href="" className="dark-grey-text">
	// 					Grey blouse
	// 				</a>

	// 			</strong>
	// 		</h5>
	// 		<span className="badge badge-pill badge-dark">bestseller</span>

	// 		<h4 className="font-weight-bold blue-text">
	// 			<strong>99$</strong>
	// 		</h4>
	// 	</div>
	// </div>
	return (
		<div className="card productCard">
			<img className="productImg card-img-top mx-auto" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" alt="" />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">Gray sweater</h5>
				<p className="card-text mt-auto">
					Lorem ipsum sit dolor amet
				</p>
				<p className="mt-auto">45 PLN</p>
			</div>
		</div>
	);
}
