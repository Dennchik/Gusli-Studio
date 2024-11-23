import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

//* ------------------------ Component's MainSlide -----------------------------
import videojs from 'video.js';
export const MainSlide = ({ baseUrl }) => {
	const videoRef = useRef(null);
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	useEffect(() => {
		// Инициализация видеоплеера
		var player = videojs('my-player', {
			controls: false, // отключает элементы управления
			loop: true,
			autoplay: true,
			preload: 'auto',
			muted: true,
		}, function onPlayerReady() {
			console.log('Your player is ready!');
			// Обработка события клика на видеоплеере
			videoRef.current.addEventListener('click', () => {
				if (this.paused()) {
					this.play();
				} else {
					this.pause();
				}
			});
		});
		// Очистка видеоплеера при размонтировании компонента
		return () => {
			if (player) {
				player.dispose();
			}
		};
	}, []);



	return (
		<div className="main-video">
			<div className="main-video__box _img">
				<video
					ref={videoRef}
					id="my-player"
					className="video-js"
					preload="auto"
					muted
				>
					<source src={getPath('img/audio/showreel-1.mp4')} type="video/mp4"></source>
				</video>
			</div>
		</div>
	);
};

MainSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
