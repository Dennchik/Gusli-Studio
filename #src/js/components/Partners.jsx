import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import PropTypes from 'prop-types';
export const Partners = ({ baseUrl }) => {
	useEffect(() => {


	}, []);


	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	return (
		<div className="partners">
			<div className="partners__body">
				<div className="partners__title">С кем работали</div>
				<div className="partners__content">
					<div className="partners-slide">
						<div className="partners-slide__body">

							<div className="partners-slide__column">
								<div className="partners-slide__image">
									<picture> {
										isWebpSupported()
											? <img src={getPath('img/main/parners/prtn-1.webp')} alt="Игорь Угольников" />
											: <img src={getPath('img/main/parners/prtn-1.png')} alt="Игорь Угольников" />
									}
									</picture>
								</div>
								<div className="partners-slide__content">
									<div className="content-slide">
										<div className="content-slide__title">Игорь Угольников</div>
										<div className="content-slide__text">Советский и российский актёр, кинорежиссёр, сценарист, продюсер, телеведущий и др.
										</div>
									</div>
								</div>
							</div>

							<div className="partners-slide__column">
								<div className="partners-slide__image">
									<picture> {
										isWebpSupported()
											? <img src={getPath('@@webRoot/img/main/parners/prtn_2.webp')} alt="Маргарита Калан" />
											: <img src={getPath('@@webRoot/img/main/parners/prtn_2.jpg')} alt="Маргарита Калан" />
									}
									</picture>
								</div>
								<div className="partners-slide__content">
									<div className="content-slide">
										<div className="content-slide__title">Маргарита Калан</div>
										<div className="content-slide__text">
											Певица, композитор, поэтесса. Родилась в г. Обнинск. Закончив гимназию и муз.школу поступила в МСИ и др.
										</div>
									</div>
								</div>
							</div>

							<div className="partners-slide__column">
								<div className="partners-slide__image">
									<picture> {
										isWebpSupported()
											? <img src={getPath('@@webRoot/img/main/parners/prtn_3.webp')} alt="Иеромонах Фотий" />
											: <img src={getPath('@@webRoot/img/main/parners/prtn_3.jpg')} alt="Иеромонах Фотий" />
									}
									</picture>
								</div>
								<div className="partners-slide__content">
									<div className="content-slide">
										<div className="content-slide__title">Иеромонах Фотий</div>
										<div className="content-slide__text">Победитель телевизионного шоу «Голос».
										</div>
									</div>
								</div>
							</div>

							<div className="partners-slide__column">
								<div className="partners-slide__image">
									<picture> {
										isWebpSupported()
											? <img src={getPath('@@webRoot/img/main/parners/prtn_4.webp')} alt="Алексей Егоров" />
											: <img src={getPath('@@webRoot/img/main/parners/prtn_4.jpg')} alt="Алексей Егоров" />
									}
									</picture>
								</div>
								<div className="partners-slide__content">
									<div className="content-slide">
										<div className="content-slide__title">Алексей Егоров</div>
										<div className="content-slide__text">Российский боксер-профессионал, выступающий в первой тяжёлой весовой категории. Мастер спорта и др.
										</div>
									</div>
								</div>
							</div>

							<div className="partners-slide__column">
								<div className="partners-slide__image">
									<picture> {
										isWebpSupported()
											? <img src={getPath('@@webRoot/img/main/parners/prtn_6.webp')} alt="Епископ Иосиф<" />
											: <img src={getPath('@@webRoot/img/main/parners/prtn_6.jpg')} alt="Епископ Иосиф<" />
									}
									</picture>
								</div>
								<div className="partners-slide__content">
									<div className="content-slide">
										<div className="content-slide__title">Епископ Иосиф</div>
										<div className="content-slide__text">Викарий патриарха Московского и всея Руси. Наместник Оптиной пустыни. Церковный историк
										</div>
									</div>
								</div>
							</div>

							<div className="partners-slide__column">
								<div className="partners-slide__image">
									<picture> {
										isWebpSupported()
											? <img src={getPath('@@webRoot/img/main/parners/prtn_5.webp')} alt="Александр Яковлев" />
											: <img src={getPath('@@webRoot/img/main/parners/prtn_5.jpg')} alt="Александр Яковлев" />
									}
									</picture>
								</div>
								<div className="partners-slide__content">
									<div className="content-slide">
										<div className="content-slide__title">
											Александр Яковлев</div>
										<div className="content-slide__text">Российский боксер-профессионал, выступающий в первой тяжёлой весовой категории. Мастер спорта и др.
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="partners-slide__pagination"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

Partners.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};