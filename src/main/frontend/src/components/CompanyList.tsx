import React, { useState } from 'react';
import ProductCardHorizontal from './productCardHorizontal';

import {Company, Product} from '../model';
import Modal from './productModal';
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
    const categories = [ 'All', 'Shirts', 'Sport wears', 'Outdoor' ];

    const companies: Array<Company> = [
        {
            id: '1',
            name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
            location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
            phone: '509 132 777'
        },
        {
            id: '1',
            name: 'FHU Ziemniakowelove',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
            location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
            phone: '780 150 516'
        },
        {
            id: '1',
            name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
            location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
            phone: '509 132 777'
        },
        {
            id: '1',
            name: 'FHU Ziemniakowelove',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
            location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
            phone: '780 150 516'
        },
        {
            id: '1',
            name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
            location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
            phone: '509 132 777'
        },
        {
            id: '1',
            name: 'FHU Ziemniakowelove',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
            location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
            phone: '780 150 516'
        },
        {
            id: '1',
            name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
            location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
            phone: '509 132 777'
        },
        {
            id: '1',
            name: 'FHU Ziemniakowelove',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
            location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
            phone: '780 150 516'
        },
        {
            id: '1',
            name: 'Izabela Borutyńska Fotografia (Foto Krystyna)',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/izabela-borutynska-foto.jpg',
            location: 'ul. Wojska Polskiego 73, 73-110 Stargard',
            phone: '509 132 777'
        },
        {
            id: '1',
            name: 'FHU Ziemniakowelove',
            image: 'https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/04/ziemniakowelove-foto.jpg',
            location: 'ul. Kazimierza Przerwy-Tetmajera 1, 73-110 Stargard',
            phone: '780 150 516'
        },
    ];

    const [ productModal, setProductModal ] = useState(undefined as Product | undefined);
    const widths = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ];

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }

    return (
        <React.Fragment>
            <Modal product={productModal} hideFunction={setProductModal} />
            {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3 mb-5">*/}
            {/*    <div className="container">*/}
            {/*        <span className="navbar-brand">Categories:</span>*/}

            {/*        <button*/}
            {/*            className="navbar-toggler"*/}
            {/*            type="button"*/}
            {/*            data-toggle="collapse"*/}
            {/*            data-target="#basicExampleNav"*/}
            {/*            aria-controls="basicExampleNav"*/}
            {/*            aria-expanded="false"*/}
            {/*            aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon" />*/}
            {/*        </button>*/}

            {/*        <div className="collapse navbar-collapse" id="basicExampleNav">*/}
            {/*            <ul className="navbar-nav mr-auto">*/}
            {/*                {categories.map((c) => {*/}
            {/*                    return (*/}
            {/*                        <li className="nav-item">*/}
            {/*                            <a className="nav-link" href="#">*/}
            {/*                                {c}*/}
            {/*                            </a>*/}
            {/*                        </li>*/}
            {/*                    );*/}
            {/*                })}*/}
            {/*            </ul>*/}

            {/*            <form className="form-inline my-2 my-lg-0">*/}
            {/*                <input*/}
            {/*                    className="form-control mr-sm-2"*/}
            {/*                    type="search"*/}
            {/*                    placeholder="Search"*/}
            {/*                    aria-label="Search"*/}
            {/*                />*/}
            {/*                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">*/}
            {/*                    Search*/}
            {/*                </button>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
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
                                        <CompanyCard company={c}/>
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
