import React, { useEffect } from 'react'; 
import { timeLineHeaderItem } from '../animations/anime-js.jsx';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import PropTypes from 'prop-types';
import { Link,animateScroll as scroll } from 'react-scroll';

export const Header = ({baseUrl}) => {
	// Именованная функция для обработки скроллинга
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

	const handleSetActive = (to) => {
		console.log(`${to} is now active`);
	};
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	const customScroll = () => {
		scroll.scrollTo('contacts', {
			// duration: 1000,
			// delay: 0,
			smooth: 'easeInQuad', // Здесь задаём easing-функцию
			// offset: -100,
		});
	};
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__column el-logo">
					<a href={getPath('index.html')}>
						<div className="header__logo">
							{isWebpSupported() ? (
								<img src={getPath('img/header/logo.webp')}
								     alt="Logo"
								     type="image/webp"/>
							) : (
								<img src={getPath('.img/header/logo.png')}
								     alt="Logo"/>
							)}
						</div>
					</a>
					<div className="header__text">
						<span>Media-Group</span>
					</div>
				</div>
				<div className="header__column">
					<div className="header__menu">
						<a className="header__item header__item--home"
						   href={getPath('index.html')}>
							<i className="icon-home"></i>
						</a>
						<div className="header__item header__item--services">
							<Link className="link-key key-services" href={'#services'}
								// activeClass="active"
								    to="services"
								    // duration={1000}
							      // spy={true}
								    // smooth={true}
							      // offset={-100}
								onSetActive={handleSetActive}
							>
								<span>Услуги</span>
							</Link>
						</div>
						<div className="header__item">
							<a href={getPath('pages/videos.html')}>
								<span>Видео</span>
							</a>
						</div>
						<div className="header__item">
							<a href={getPath('pages/about.html')}>Компания</a>
						</div>
						<div className="header__item">
							<a href={getPath('')}>Новости</a>
						</div>
						<div className="header__item header__item--contacts">
							<Link className="link-key key-services" href={'#contacts'}
							      to="footer"
							      duration={1000}
							      spy={true}
							      offset={-100}
							      smooth={true} // Используем стандартное плавное поведение
							      onClick={customScroll} // Вешаем кастомную функцию на onClick
							>
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
	);
};

Header.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
