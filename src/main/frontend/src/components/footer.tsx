import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
	return (
		<footer className="page-footer text-center font-small mt-4">
			<hr className="my-4" />

			<div className="pb-4 bg-dark">
				<a href="#" target="_blank">
					<FontAwesomeIcon icon={faStar} />
				</a>
			</div>

			<div className="footer-copyright">© 2020 Copyright: Kartel</div>
		</footer>
	);
}
