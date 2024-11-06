import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { partnersSlide } from '../layouts/partners-slide.js';
import { buildSwiper } from '../layouts/build-swiper.js';

export const Partners = () => {
	useEffect(() => {
		buildSwiper();
		partnersSlide();
	}, []);

	return (
		<div className="partners _container">
			<div className="partners__body">
				<div className="partners__title">С кем работали</div>
				<div className="partners__content">
					<div className="partners-slide">
						<div className="partners-slide__body _swiper">
							<div className="partners-slide__column">
								<div className="partners-slide__content">
									<div className="partners-slide__image">
										<picture> {isWebpSupported()
											? <img src={'img/main/partners/partn-1.webp'}
														 alt="Игорь Угольников" />
											: <img src={'img/main/partners/partn-1.png'}
														 alt="Игорь Угольников" />}
										</picture>
									</div>
									<div className="partners-slide__title"> Игорь Угольников</div>
									<div className="partners-slide__text">Советский и
										российский актёр, кинорежиссёр, сценарист, продюсер,
										телеведущий.
									</div>
								</div>
							</div>
							<div className="partners-slide__column">
								<div className="partners-slide__content">
									<div className="partners-slide__image">
										<picture> {isWebpSupported()
											? <img src={'img/main/partners/partn_2.webp'}
														 alt="Маргарита Калан" />
											: <img src={'img/main/partners/partn_2.jpg'}
														 alt="Маргарита Калан" />}
										</picture>
									</div>
									<div className="partners-slide__title">Маргарита Калан</div>
									<div className="partners-slide__text">
										Певица, композитор, поэтесса. Родилась в г. Обнинск.
										Закончив гимназию и муз.школу поступила в МСИ.
									</div>
								</div>
							</div>
							<div className="partners-slide__column">
								<div className="partners-slide__content">
									<div className="partners-slide__image">
										<picture> {isWebpSupported()
											? <img src={'img/main/partners/partn_3.webp'}
														 alt="Иеромонах Фотий" />
											: <img src={'img/main/partners/partn_3.jpg'}
														 alt="Иеромонах Фотий" />}
										</picture>
									</div>
									<div className="partners-slide__title">Епископ Иосиф</div>
									<div className="partners-slide__text">Викарий патриарха
										Московского и всея Руси. Наместник Оптиной пустыни.
										Церковный историк.
									</div>
								</div>
							</div>
							<div className="partners-slide__column">
								<div className="partners-slide__content">
									<div className="partners-slide__image">
										<picture> {isWebpSupported()
											? <img src={'@@webRoot/img/main/partners/partn_4.webp'}
														 alt="Алексей Егоров" />
											: <img src={'img/main/partners/partn_4.jpg'}
														 alt="Алексей Егоров" />}
										</picture>
									</div>
									<div className="partners-slide__title">Алексей Егоров</div>
									<div className="partners-slide__text">Российский
										боксер-профессионал, выступающий в первой тяжёлой
										весовой категории. Мастер спорта.
									</div>
								</div>
							</div>
							<div className="partners-slide__column">
								<div className="partners-slide__content">
									<div className="partners-slide__image">
										<picture>
											{isWebpSupported()
												? <img src={'img/main/partners/partn_6.webp'}
															 alt="Епископ Иосиф<" />
												: <img src={'img/main/partners/partn_6.jpg'}
															 alt="Епископ Иосиф " />}
										</picture>
									</div>
									<div className="partners-slide__title">Иеромонах Фотий</div>
									<div className="partners-slide__text">
										Победитель телевизионного шоу «Голос».
									</div>
								</div>
							</div>
							<div className="partners-slide__column">
								<div className="partners-slide__content">
									<div className="partners-slide__image">
										<picture> {isWebpSupported()
											? <img src={'@@webRoot/img/main/partners/partn_5.webp'}
														 alt="Александр Яковлев" />
											: <img src={'@@webRoot/img/main/partners/partn_5.jpg'}
														 alt="Александр Яковлев" />}
										</picture>
									</div>
									<div className="partners-slide__title">Александр Яковлев</div>
									<div className="partners-slide__text">Российский
										боксер-профессионал, выступающий в первой тяжёлой
										весовой
										категории. Мастер спорта.
									</div>
								</div>
							</div>
						</div>
						<div className="partners-slide__pagination"></div>
					</div>
				</div>
			</div>
		</div>);
};

Partners.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};