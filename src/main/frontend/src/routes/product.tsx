import React from 'react';
import logo from '../logo.svg';
import Rating from '../components/rating';

export default function Product() {
	const product = {
		id: '1',
		name: 'Gray sweater',
		image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
		shortDescription: 'Lorem ipsum sit dolor amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nibh quis viverra luctus. Aliquam volutpat eget dui at commodo. Nunc arcu turpis, ultrices vitae facilisis eget, aliquet gravida turpis. Praesent blandit diam sit amet nunc sagittis, in auctor justo accumsan. Nunc at nisi enim. Pellentesque mollis iaculis turpis, vel semper nibh vestibulum in. Praesent imperdiet purus sed turpis finibus porttitor sit amet et est. Nullam vulputate congue gravida. Proin mattis erat nec lacus auctor, eu sodales sapien pretium. Fusce fermentum, turpis id sollicitudin scelerisque, lectus elit porttitor tortor, sed rhoncus dui risus sit amet sapien.',
		price: 4500,
	};
	return (
		<React.Fragment>
			<div className="container">
				<div className="media">
					<div className="media-left">
						<img className="media-object" src={product.image} alt="" />
					</div>
					<div className="media-body">
						<p>{product.description}</p>
						<div className="row justify-content-md-start" style={{ whiteSpace: 'nowrap' }}>
							<Rating rating={4.26} hideText={true} />
							4.56/5
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
