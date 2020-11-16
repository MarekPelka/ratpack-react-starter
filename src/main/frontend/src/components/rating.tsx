import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

export default function Rating({ rating = 5, hideText = false }) {
	const parseRating = rating > 5 ? 5 : rating < 0 ? 0 : rating;

	const fullStartToDisplay = Math.floor(parseRating);
	const displayHalfStar = Math.round((parseRating * 2) % 2);

	const starsCss = 'icon has-text-warning';

	return (
		<div className="stars-wrapper">
			<div className="stars">
				<div>
				{Array.from({ length: fullStartToDisplay }, (_, index) => index + 1).map((e) => (
					<span className={starsCss}>
						<FontAwesomeIcon icon={faStar} />
					</span>
				))}
				{displayHalfStar ? (
					<span className={starsCss}>
						<FontAwesomeIcon icon={faStarHalf} />
					</span>
				) : (
					''
				)}
				</div>
			</div>
			{hideText ? '' : <span>{parseRating} / 5</span>}
		</div>
	);
}
