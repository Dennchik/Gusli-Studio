import React, {useEffect} from 'react';
import {Element} from 'react-scroll';
import {
	tlFooterParallel,
	tlFooterHorizontal
} from '../animations/animation-index.jsx';
import {Members} from '../components/Members.jsx';
import PropTypes from 'prop-types';
//* ----------------------------------------------------------------------------
export const Footer = ({isHomePage}) => {
	const baseUrl = isHomePage ? '.' : '..';
	useEffect(() => {
		const isMobile = /Mobi|Android/i.test(navigator.userAgent);
		if (!isMobile) {
			if (isHomePage) {
				tlFooterParallel();
			}
			tlFooterHorizontal();
		}
	}, [isHomePage]);

	return (
		<Element className='footer'>
			<div className="footer__content">
				<div className="footer__info _container">
					{isHomePage && <Members baseUrl={baseUrl}/>}
					{/* <Members baseUrl={baseUrl} isHomePage={isHomePage}/> */}
					<div className="footer__help el-4">
						<i className='icon-achievements'></i>
						<i className='icon-services'></i>
						<i className='icon-reviews'></i>
						<i className='icon-contacts'></i>
					</div>
				</div>
				<div className="contacts footer__contacts el-5">
					<div className="contacts__container">
						<div className="contacts__items">
							<div className="contacts__item">
								<i className='icon-location'></i>
								<div className='contacts__text'>
									<p>Россия, Калужская область, г. Обнинск,</p>
									<p>Проспект Ленина, 137, к. 4, подъезд 3, оф. 260</p>
								</div>
							</div>
							<div className="contacts__item">
								<a href="tel:+79106044424">
									<i className="icon-phone-call"></i>
									<span>+7 910 604-44-24</span>
								</a>
							</div>
							<div className="contacts__item">
								<a href="mailto:mailto:studio@obninsk-gusli.ru">
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
							<span>Media - GROUP ©  2024.</span>
							<a className='community__link'
								 href="">Privacy Policy.
								<i className='icon-angles-right-solid'></i>
							</a>
						</div>
						<div className="community__icons">
							<div className="community__icon">
								<a className="wa"
									 title="WhatsApp"
									 target="blank"
									 href="https://wa.me/79106044424">
									<i className="icon-whatsapp"></i>
								</a>
							</div>
							<div className="community__icon">
								<a className="wa"
									 title="VK"
									 target="blank"
									 href="https://vk.com/studio_gusli">
									<i className="icon-vk-brand"></i>
								</a>
							</div>
							<div className="community__icon">
								<a className="wa"
									 title="TG"
									 target="blank"
									 href="https://t.me/gusli_studio">
									<i className="icon-telegram-fly"></i>
								</a>
							</div>
							<div className="community__icon">
								<a className="wa"
									 title="youtube"
									 target="blank"
									 href="https://youtube.com/@guslistudio6257?si=36fe20TYpLAJyB3m">
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
	isHomePage: PropTypes.bool.isRequired,
};