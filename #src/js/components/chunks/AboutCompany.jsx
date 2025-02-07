import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import axios from 'axios';
//* ----------------------------------------------------------------------------
export const AboutCompany = ({ baseUrl }) => {
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	const [footerData, setFooter] = useState(null);
	useEffect(() => {
		axios
			.get(
				"https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/452"
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setFooter(response.data);
				} else {
					console.error("Post data not found or empty array.");
				}
			})
			.catch((error) => {
				console.error("Error fetching post:", error);
			});
	}, []);
    const acf = footerData ? footerData.acf : null;
	return (
		<div className="about-company">
			<div className="about-company__column el-1">
				<div className="about-company__body">
					<div className="about-company__title">КОМПАНИЯ</div>
					<div className="about-company__text">
						<p>{acf && acf.footer_data[0].companiya.text_1}</p>
						<p>{acf && acf.footer_data[0].companiya.text_2}</p>
						<p>{acf && acf.footer_data[0].companiya.text_3}</p>
					</div>
				</div>
				<div className="about-company__footer">
					<a className="about-company__button btn-grad"
						href={getPath('about.html')}>читать всё</a>
				</div>
			</div>
			<div className="about-company__column el-2">
				<div className="about-company__body">
					<div className="about-company__title">СЕРВИС</div>
					<div className="about-company__item-services">
						<i className="icon-microphone"></i>
						<span>{acf && acf.footer_data[0].servis.text_1}</span>
					</div>
					<div className="about-company__item-services">
						<i className="icon-fast-forward"></i>
						<span>{acf && acf.footer_data[0].servis.text_1}</span>
					</div>
					<div className="about-company__item-services">
						<i className="icon-music"></i>
						<span>{acf && acf.footer_data[0].servis.text_1}</span>
					</div>
				</div>
				<div className="about-company__footer">
					<a className="about-company__button btn-grad"
						href={getPath('services.html')}
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
											'img/teammates/team-1.webp')} alt="image" />
										: <img src={getPath(
											'img/teammates/team-1.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									Георгий Дудунов
								</div>
								<div className="team-mates__text">
									<p>Георгий - основатель студии и&nbsp;ведущий звукорежиссер.
										Инженер.</p>
								</div>
							</li>
						</ul>
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture>
										{isWebpSupported()
											? <img src={getPath(
												'img/teammates/team-2.webp')} alt="image" />
											: <img src={getPath(
												'img/teammates/team-2.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									Ryan Gosling
								</div>
								<div className="team-mates__text">
									<p>Райан - ассистент звукорежиссера в&nbsp;студии
										звукозаписи.</p>
								</div>
							</li>
						</ul>
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture>
										{isWebpSupported()
											? <img src={getPath(
												'img/teammates/team-3.webp')} alt="image" />
											: <img src={getPath(
												'img/teammates/team-3.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									Ryan Gosling
								</div>
								<div className="team-mates__text">
									<p>Райан - ассистент звукорежиссера в&nbsp;студии
										звукозаписи.</p>
								</div>
							</li>
						</ul>
						<ul className="team-mates__list">
							<li>
								<div className="team-mates__image">
									<picture>
										{isWebpSupported()
											? <img src={getPath(
												'img/teammates/team-4.webp')} alt="image" />
											: <img src={getPath(
												'img/teammates/team-4.png')} alt="image" />}
									</picture>
								</div>
							</li>
							<li>
								<div className="team-mates__name">
									Маргарита Калан
								</div>
								<div className="team-mates__text">
									<p>Певица, композитор, поэтесса.</p>
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