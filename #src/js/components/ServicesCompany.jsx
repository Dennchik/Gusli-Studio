import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';

export const ServicesCompany = () => {

	return (
		<div className="categories">
			<div className="material-parallax parallax">
				<div className="parallax__image">
					<picture>
						{isWebpSupported() ? (
								<img className="parallax__services-company bg"
										 src={'@@webRoot/img/patterns/space.webp'}
										 alt="image" />
							)
							: (
								<img className="parallax__services-company bg"
										 src={'@@webRoot/img/patterns/space.jpg'}
										 alt="image" />
							)}
					</picture>
				</div>
			</div>
		</div>
	);
};
