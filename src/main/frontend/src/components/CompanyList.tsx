import React, { useState } from 'react';
import ProductCardHorizontal from './productCardHorizontal';

import { Company, Product } from '../model';
import Modal from './productModal';
import CompanyCard from './CompanyCard';

import restauracjaToskania from '../restauracja.png';

export default function CompanyList() {
	const categories = [ 'All', 'Shirts', 'Sport wears', 'Outdoor' ];

	const companies: Array<Company> = [
		{
			id: 'foto-krystyna',
			name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'restauracja-toskania',
			name: 'Restauracja Toskania',
			image: restauracjaToskania,
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'fhu-ziemniakowelove',
			name: 'FHU Ziemniakowelove',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
			location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
			phone: '780 150 516',
		},
		{
			id: 'foto-krystyna',
			name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'restauracja-toskania',
			name: 'Restauracja Toskania',
			image: restauracjaToskania,
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'fhu-ziemniakowelove',
			name: 'FHU Ziemniakowelove',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
			location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
			phone: '780 150 516',
		},
		{
			id: 'foto-krystyna',
			name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'restauracja-toskania',
			name: 'Restauracja Toskania',
			image: restauracjaToskania,
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'fhu-ziemniakowelove',
			name: 'FHU Ziemniakowelove',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
			location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
			phone: '780 150 516',
		},
		{
			id: 'foto-krystyna',
			name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'restauracja-toskania',
			name: 'Restauracja Toskania',
			image: restauracjaToskania,
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'fhu-ziemniakowelove',
			name: 'FHU Ziemniakowelove',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
			location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
			phone: '780 150 516',
		},
		{
			id: 'foto-krystyna',
			name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'restauracja-toskania',
			name: 'Restauracja Toskania',
			image: restauracjaToskania,
			location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
			phone: '509 132 777',
		},
		{
			id: 'fhu-ziemniakowelove',
			name: 'FHU Ziemniakowelove',
			image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
			location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
			phone: '780 150 516',
		},
	];

	const [ productModal, setProductModal ] = useState(undefined as Product | undefined);
	const widths = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];

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
			<div className="container">
				<section className="text-center mb-4">
					<div className="row">
						{companies.map((c, index) => {
							const selectedWidth = widths[index] ? widths[index] : 1;
							if (selectedWidth === 1 || getWindowDimensions().width < 1200) {
								return (
									<div className={'col-lg-3 col-md-6 mb-4'}>
										{/*<div onClick={() => setProductModal(p)}>*/}
										{/*    <CompanyCard company={p} />*/}
										{/*</div>*/}
										<CompanyCard company={c} />
									</div>
								);
							} else {
								const width = `col-lg-${selectedWidth * 3}`;
								return (
									<div className={width + ' col-md-6 mb-4'}>
										{/*<div onClick={() => setProductModal(c)}>*/}
										{/*    <ProductCardHorizontal product={c} />*/}
										{/*</div>*/}
									</div>
								);
							}
						})}
					</div>
					{/* <div className="row">
						<div className="col-9">
							<ProductCardHorizontal product={products[0]} />
						</div>
					</div> */}
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
