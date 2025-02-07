import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import {
	initSectionTriggerMove,
	tlFooterHorizontal,
	tlFooterParallel,
} from '../../animations/animations.jsx';
import { AboutCompany } from '../chunks/AboutCompany.jsx';
//* ----------------------------------------------------------------------------
export const Footer = ({ baseUrl, isHomePage }) => {
	useEffect(() => {
		const isMobile = /Mobi|Android/i.test(navigator.userAgent);
		if (!isMobile) {
			if (isHomePage) {
				tlFooterParallel();
				tlFooterHorizontal();
				initSectionTriggerMove('#footer', '.link-key--contacts');
			}
		}
	}, []);
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<Element className="footer">
			<div className="footer__content">
				<div className="footer__info _container">
					{isHomePage && <AboutCompany baseUrl={baseUrl} />}
					<div className="footer__help el-4">
						<a href={getPath('about.html')}>
							<i className="icon-achievements">
							</i>
						</a>
						<a href="tel:++79106044424">
							<i className="icon-services"></i>
						</a>
						<a href="mailto:studio@obninsk-gusli.ru">
							<i className="icon-contacts"></i>
						</a>
					</div>
				</div>
				<div className="contacts footer__contacts el-5">
					<div className="contacts__container">
						<div className="contacts__items">
							<div className="contacts__item">
								<i className="icon-location"></i>
								<div className="contacts__text">
									<p>Россия, Калужская область,&nbsp;г.&nbsp;Обнинск,</p>
									<p>
										Проспект Ленина,&nbsp;137, к.&nbsp;4, ;подъезд 3,
										оф.&nbsp;260
									</p>
								</div>
							</div>
							<div className="contacts__item">
								<a href="tel:+79106044424">
									<i className="icon-phone-call"></i>
									<span>+7 910 604-44-24</span>
								</a>
							</div>
							<div className="contacts__item">
								<a href="mailto:studio@obninsk-gusli.ru">
									<i className="icon-enve-mail"></i>
									<span>studio@obninsk-gusli.ru</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__community _container">
				<div className="community">
					<div className="community__items">
						<div className="community__title">
							<span>Media-Studio GROUP © 2024.</span>
							<a className="community__link" href="">
								Privacy Policy.
								<i className="icon-angles-right-solid"></i>
							</a>
						</div>
						<div className="community__icons">
							<div className="community__icon">
								<a className="wa"
									title="WhatsApp"
									target="blank"
									href="https://wa.me/79106044424"
								>
									<i className="icon-whatsapp"></i>
								</a>
							</div>
							<div className="community__icon">
								<a className="wa"
									title="VK"
									target="blank"
									href="https://vk.com/studio_gusli"
								>
									<i className="icon-vk-brand"></i>
								</a>
							</div>
							<div className="community__icon">
								<a className="wa"
									title="TG"
									target="blank"
									href="https://t.me/gusli_studio"
								>
									<i className="icon-telegram-fly"></i>
								</a>
							</div>
							<div className="community__icon">
								<a className="wa"
									title="youtube"
									target="blank"
									href="https://youtube.com/@guslistudio6257?si=36fe20TYpLAJyB3m"
								>
									<i className="icon-youtube-logo"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};

Footer.propTypes = {
	baseUrl: PropTypes.string.isRequired,
	isHomePage: PropTypes.bool.isRequired,
};