import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//* ----------------------------------------------------------------------------
export const AboutCompany = ({ baseUrl }) => {
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	const [FooterData, setFooterData] = useState(null);
	useEffect(() => {
		const localFooterData = JSON.parse(sessionStorage.getItem('FooterData'));
		console.log(localFooterData);
		if (localFooterData){
			setFooterData(localFooterData);
		} else {
			axios
				.get(
					'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/452'
				)
				.then((response) => {
					console.log(response.data);
					if (response.data) {
						setFooterData(response.data.acf.footer_data[0]);
						sessionStorage.setItem('FooterData', JSON.stringify(response.data.acf.footer_data[0]));

						let storedData = JSON.parse(sessionStorage.getItem('offer')) || {};
						storedData['index'] = response.data.acf.prays;
						sessionStorage.setItem('offer', JSON.stringify(storedData));
					} else {
						console.error('Post data not found or empty array.');
					}
				})
				.catch((error) => {
					console.error('Error fetching post:', error);
				});
		}
	}, []);
	return (
		<div className="about-company">
			<div className="about-company__column el-1">
				<div className="about-company__body">
					<div className="about-company__title">КОМПАНИЯ</div>
					<div className="about-company__text">
						<p>{FooterData && FooterData.companiya.text_1}</p>
						<p>{FooterData && FooterData.companiya.text_2}</p>
						<p dangerouslySetInnerHTML={{__html: FooterData && FooterData.companiya.text_3}}/>
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
						<span>{FooterData && FooterData.servis.text_1}</span>
					</div>
					<div className="about-company__item-services">
						<i className="icon-fast-forward"></i>
						<span>{FooterData && FooterData.servis.text_1}</span>
					</div>
					<div className="about-company__item-services">
						<i className="icon-music"></i>
						<span>{FooterData && FooterData.servis.text_1}</span>
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
						{FooterData &&
							FooterData.komanda.slice(0, 4).map((member, i) => (
								<ul className="team-mates__list" key={i}>
									<li>
										<div className="team-mates__image">
											<picture>
												<img src={member.img} alt="image" />
											</picture>
										</div>
									</li>
									<li>
										<div className="team-mates__name">{member.name}</div>
										<div className="team-mates__text">
											<p>{member.desc}</p>
										</div>
									</li>
								</ul>
							))}


					</div>
				</div>
			</div>
		</div>
	);
};
AboutCompany.propTypes = {
	baseUrl: PropTypes.string.isRequired
};