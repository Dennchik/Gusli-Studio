import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { Link } from 'react-scroll';
import { timeLineHeaderItem } from '../../animations/anime-js.jsx';

export const Header = ({ baseUrl }) => {
	//* Именованная функция для обработки скроллинга
	const handleScroll = () => {
		const header = document.querySelector('.header');
		const mainContent = document.querySelector(
			'.page__main-content');
		const mainContentTop = mainContent.getBoundingClientRect().top;

		if (mainContentTop < 0) {
			header.classList.add('with-border');
		} else {
			header.classList.add('without-border');
			header.classList.remove('with-border');
		}

		if (mainContentTop < 0) {
			header.classList.remove('without-border');
		}
	};

	useEffect(() => {
		timeLineHeaderItem();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<div className="header">
			<div className="header__container">
				<div className="header__content">
					<a href={getPath('index.html')}>
						<div className="header__column el-logo">
							<div className="header__logo">
								{isWebpSupported()
									? (<img src={getPath('img/icons/logo.webp')}
										alt="Logotip Gusli" />)
									: (<img src={getPath('img/icons/logo.png')}
										alt="Logotip Gusli" />)
								}
							</div>
							<div className="header__text">
								<span>Media-Group</span>
							</div>
						</div>
					</a>
					<div className="header__column">
						<div className="header__menu">
							<a className="header__item header__item--home"
								href={getPath('@@webRoot/index.html')}>
								<i className="icon-home"></i>
							</a>
							<div className="header__item">
								<a className="header__link-key" href={getPath('services.html')}>
									<span>Услуги</span>
								</a>
							</div>
							<div className="header__item">
								<a className="header__link-key"
									href={getPath('services/service-video.html')}>
									<span>Видео</span>
								</a>
							</div>
							<div className="header__item">
								<a className="header__link-key"
									href={getPath('about.html')}>
									<span>Компания</span>
								</a>
							</div>
							<div className="header__item">
								<a className="header__link-key"
									href={getPath('products.html')}>
									<span>Товары</span>
								</a>
							</div>
							<div className="header__item">
								<Link className="header__link-key link-key--contacts"
									to="contacts"
									duration={500}
									offset={-100}
									isDynamic={true}
									smooth='easeInQuad'>
									<span>Контакты</span>
								</Link>
							</div>
						</div>
						<div className="header__bookmark"></div>
					</div>
					<div className="header__column el-community">
						<a href="tel:++79106044424"
							className="el-community__phone">
							<i className="icon-phone-ringing"></i>
							<div className="el-community__content">
								<h5 className="el-community__title">Связаться с нами</h5>
								<span>+7 910 604-44-24</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	baseUrl: PropTypes.string.isRequired
}; 