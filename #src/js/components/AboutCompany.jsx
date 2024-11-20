import React from 'react';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
//* ----------------------------------------------------------------------------
export const AboutCompany = ({ baseUrl }) => {
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	return (
		<div className="about-company">
			<div className="about-company__column el-1">
				<div className="about-company__body">
					<div className="about-company__title">КОМПАНИЯ</div>
					<div className="about-company__text">
						<p>Наша медиа-группа представляет собой превосходную студию
							звукозаписи и продюсерскую компанию. Мы специализируемся на
							создании текстов, продюсировании, звукозаписи и развитии талантов.
							Готовы к сотрудничеству с вами в любое время.</p>
						<p>Мы признаём и ценим значимость каждого проекта. Наше
							обязательство - обеспечить высочайшее качество звукозаписи,
							гибкость и терпение, необходимые для достижения вами высокого
							уровня в конкурентной среде современного рынка.</p>
						<p>В нашей студии вас ждёт дружелюбная и уютная атмосфера, создающая
							идеальное окружение для раскрытия вашего таланта и создания ваших
							лучших произведений.</p>
					</div>
				</div>
				<div className="about-company__footer">
					<a className="about-company__button"
						href={'about.html'}>читать всё</a>
				</div>
			</div>
			<div className="about-company__column el-2">
				<div className="about-company__body">
					<div className="about-company__title">СЕРВИС</div>
					<div className="about-company__item-services">
						<i className="icon-microphone"></i>
						<span>Мы предлагаем услуги аналоговой и цифровой записи, а также
							микширования в широком спектре жанров.</span>
					</div>
					<div className="about-company__item-services">
						<i className="icon-fast-forward"></i>
						<span>Наша студия привлекает великолепным интерьером и оборудованными
							комфортабельными помещениями, идеально подходящими для создания
							лучших произведений.</span>
					</div>
					<div className="about-company__item-services">
						<i className="icon-music"></i>
						<span>В нашей студии мы внедряем передовое оборудование и программное
							обеспечение для микширования, обеспечивая высочайшее качество
							звучания ваших треков. Ваше творчество - наш приоритет.</span>
					</div>
				</div>
				<div className="about-company__footer">
					<a className="about-company__button"
						href={'services.html'}
						type="button">читать всё</a>
				</div>
			</div>
			<div className="about-company__column el-3">
				<div className="about-company__body">
					<div className="about-company__title">НАША КОМАНДА</div>
					<div className="team-mates about-company__team-items">
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture> {isWebpSupported()
										? <img src={getPath(
											'img/footer/team-1.webp')} alt="image" />
										: <img src={getPath(
											'img/footer/team-1.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									<a href="#">Георгий Дудунов</a>
								</div>
								<div className="team-mates__text">
									<p>Георгий - основатель студии и ведущий звукорежиссер.
										Engineer.</p>
								</div>
							</li>
						</ul>
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture>
										{isWebpSupported()
											? <img src={getPath(
												'img/footer/team-2.webp')} alt="image" />
											: <img src={getPath(
												'img/footer/team-2.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									<a href="#">Ryan Gosling</a>
								</div>
								<div className="team-mates__text">
									<p>Райан - ассистент звукорежиссера в студии звукозаписи.</p>
								</div>
							</li>
						</ul>
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture>
										{isWebpSupported()
											? <img src={getPath(
												'img/footer/team-3.webp')} alt="image" />
											: <img src={getPath(
												'img/footer/team-3.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									<a href="#">Ryan Gosling</a>
								</div>
								<div className="team-mates__text">
									<p>Райан - ассистент звукорежиссера в студии звукозаписи.</p>
								</div>
							</li>
						</ul>
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture>
										{isWebpSupported()
											? <img src={getPath(
												'img/footer/team-4.webp')} alt="image" />
											: <img src={getPath(
												'img/footer/team-4.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									<a href="#">Маргарита Калан</a>
								</div>
								<div className="team-mates__text">
									<p>Adam is the studio’s founder and leading sound
										engineer.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
AboutCompany.propTypes = {
	baseUrl: PropTypes.string.isRequired
};