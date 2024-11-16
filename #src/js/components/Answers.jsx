import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { animateTitles, wavesAnimation } from '../animations/animations.jsx';
// import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';

export const Answers = () => {

	useEffect(() => {
		animateTitles(
			'.questions__title',
			'.questions__title',
			'.questions__title',
			'=150',
			'=150',
		);
	}, []);

	useEffect(() => {

		document.querySelectorAll('[data-spoiler]').forEach(function (spoilerGroup) {
			const itsSpoilers = spoilerGroup.querySelectorAll('.questions__list');

			if (itsSpoilers) {
				itsSpoilers.forEach((itsSpoiler) => {
					const listItems = itsSpoiler.querySelectorAll('.questions__item');
					listItems.forEach(listItem => {
						const trigger = listItem.querySelector('._trigger');
						trigger.addEventListener('click', () => {
							const opened_spoiler = itsSpoiler.querySelector('._collapsed');
							_toggleOpen(listItem);
							if (opened_spoiler && opened_spoiler !== listItem) {
								_toggleOpen(opened_spoiler);
							}
							// listItem.classList.toggle('_collapsed');
						});
					});
					const _toggleOpen = (el) => {
						if (el.classList.contains('_collapsed')) {
							el.classList.remove('_collapsed');
						} else {
							el.classList.add('_collapsed');
						}
					};
				});
			}
		});
	}, []);
	useEffect(() => {

	}, []);

	// useEffect(() => {
	// 	console.log('Запуск анимации...');
	// 	wavesAnimation();

	// 	return () => {
	// 		const canvas = document.querySelector('#holder canvas');
	// 		if (canvas) {
	// 			canvas.remove();
	// 		}
	// 	};
	// }, []);

	return (
		<div id="holder" style={{ position: 'relative' }}>
			<div className='questions _container'>
				<div className="questions__body" data-spoiler="">
					<div className='questions__title'>Вопросы и ответы</div>
					<div className='questions__list'>
						<div className='questions__item _collapsed'>
							<div className="questions__head _trigger">
								<h3>Что нужно для успешной записи песни?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Как минимум: не есть орехи, не пить холодное и зелёный чай (иначе будет першить в горле, и это негативно отразится на голосе и общем результате записи)..</p>
									<p>Можете взять 50 мл коньячку, если вам так будет комфортнее. Ну или мы вам нальём для расслабления связок. (Алкоголь в небольших дозах раскрепощает и дает расслабиться перед записью).</p>
									<p>В идеале: попить горячего чая. Это разогреет ваши голосовые связки (что положительно скажется на голосе).</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Сколько времени нужно бронировать для записи одной песни?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Если вы первый раз в студии, то рекомендуем для начала взять 2-3 часа. Вам надо будет раскрепоститься, настроиться на запись, войти в контакт со звукорежиссёром, который будет отвечать за то, чтобы вы не стеснялись и «раскрылись» в полной мере.</p>
									<p>Если вы хотите пригласить педагога по вокалу (об этом чуть ниже написано в пункте «Если я плохо пою…»), то рекомендуется взять 4-5 часов, разбив их на 2 дня – в первый день позаниматься с педагогом по вокалу в самой студии, и во второй день уже записать голос с разогретыми и тренированными голосовыми связками.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Для чего я хочу записать песню?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Ответьте себе на вопрос: Какую цель вы преследуете записью песни? От этого зависят варианты набора услуг звукозаписи, которые вам потребуются:</p>
									<p>«Я хочу просто попробовать для себя» Если просто попробовать – это одно дело, и тут не стоит брать все услуги разом, чтобы на выходе получить радийный формат песни.
										«Хочу песню как у профессионального певца!» Если хотите сделать профессиональную запись, и звучать, как ваш любимый артист по радио – это другое дело. И нам есть, что предложить вам.</p>
									<p>Так же следует понимать, под какую музыку вы будете петь?</p>
									<p>Мы настоятельно рекомендуем тщательно подбирать минусовки (инструменталы), чтобы они качественно звучали (хотя бы 320кб/с mp3 ), но сразу предупредим: подобный формат сильно ограничит на стадии сведения и мастеринга, и сделать с таким треком чудо звучания будет крайне трудно, т.к. музыка уже будет сведённая (не под ваш голос), и сжата сайтом, с которого вы скачаете минусовку.</p>
									<p>Но есть варианты, как выйти из положения (читать ниже)</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Я хочу, чтобы инструментал звучал качественно, а в интернете такой версии не удалось найти. Что делать?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Допустим, вы хотите перепеть для себя песню «Я уеду жить в Лондон» или «О, Боже, какой мужчина» или «Вокруг шум», но найти в интернете инструментал (минусовку) хорошего качества вы не смогли, но спеть хочется – не отчаивайтесь.</p>
									<p>Мы напишем для вас точно такую же аранжировку «с нуля», и вы не сможете найти отличия. Права на музыку, конечно же, будут принадлежать композиторам, написавшим оригинал, так что использовать коммерчески вы не сможете свою запись, но порадовать себя и близких качественным звучанием сможете без проблем.</p>
									<p>Написание такой мелодии – копирки идёт от 7 000 рублей. Более подробно об услуге «Аранжировка» можно почитать здесь.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Я хочу подарить запись песни. Как это сделать?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Если вы хотите подарить подарок другу, второй половинке / коллеге / начальнику, чтобы они наконец записали песню, то идеальным решением будет – подарить им наш подарочный набор с деревянной аудиокассетой.</p>
									<p>Номинальная стоимость такого набора – от 15 000 рублей. Вы можете внести любую сумму, чтобы одаряемый сам мог выбрать те услуги, которые ему действительно нужны. Возможно, добавить какие-то доп.услуги по спец.цене. Подробности уточняйте у менеджеров студии.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Я хочу спеть песню на собственную мелодию (насвистел в душе или напел себе под нос, когда мыл посуду). Что тогда?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Вообще отлично! Наши аранжировщики без труда уловят вашу мелодию (надо будет посидеть и негромко посвистеть им на ушко), и предложат вам дальнейшие варианты аранжировки. Вы получите полностью авторскую музыку, права на которую будут только у вас! Стоит такая услуга – от 20 000 руб.</p>
									<p>Более подробно об услуге «Аранжировка» можно почитать здесь</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Сколько человек может со мной прийти на запись?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Берите всех друзей и коллег – будет весело! p.s. Пожалуйста, предупредите менеджеров студии, если вы планируете прийти с маленьким ребёнком – мы подготовим всё для удобства дитя и молодых родителей.</p>
									<p>Обратите внимание, что при бронировании студии для группы более, чем из 7 человек, аренда студии стоит 3 000 руб/час. Подробнее об услуге.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Что ещё мне может понадобиться во время записи?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<ul>
										<li>Музыка, под которую будете петь (об этом выше рассказано)</li>
										<li>Слова (если у вас в репертуаре нет художественного свиста)
										</li>
										<li>Педагог по вокалу – в идеале. Если у вас есть свой – приходите с ним, если нет, то мы пригласим одного из своих проверенных педагогов, которые «ставили голоса» даже в самых запущенных случаях.</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>
									Если я плохо пою, можно что-нибудь с этим сделать на записи?
								</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<ul>
										<li>Мы уже говорили о важности репетиции (распевки) с педагогом по вокалу, но так же рекомендуем, чтобы педагог присутствовал во время записи – он сможет оперативно подсказывать и вытягивать вашу запись, что в дальнейшем может помочь сэкономить на аренде студии (для перепевания, например).</li>
										<li>Можно заказать услугу «Тюнинг вокала» (цифровое выравнивание фальшиво спетых нот) – это может значительно улучшить качество голоса. Но, несмотря на эту волшебную услугу, мы всё равно рекомендуем позаниматься с педагогом по вокалу. Тюнинг не даёт гарантию того, что вы сразу станете звучать, как Дмитрий Хворостовский, но может значительно приблизить ваш голос к правильно спетой партии песни.</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Что делать со сведённым (с готовым) материалом?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Смотря, какую цель вы преследуете:</p>
									<ul>
										<li>если для себя, то можем сделать вам нужное кол-во экземпляров на CD или Flash-носителе и даже на виниле в авторском стиле и с вашей обложкой, если душа захочет (она хочет, как правило)</li>
										<li>если вы – артист, который хочет сделать профессиональную запись и попробовать сделать промо своей записи, не потравив при этом последние деньги, то мы предложим различные варианты продвижения как на радио, так и на популярные интернет-площадки. Нам нет смысла предлагать неработающие каналы распространения – мы бы не стали рисковать своей репутацией, к тому же, мы первые, кто заинтересован, чтобы ваш материал хорошо звучал на популярных площадках.</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Я хочу записать песню, что мне для этого нужно?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<ul>
										<li>выбрать репертуар</li>
										<li>отрепетировать песню, которую вы хотите записать</li>
										<li>забронировать студию для вашей записи, а так же рассказать менеджеру студии о том, что вы будете записывать, чтобы мы могли подготовиться заранее к вашей записи</li>
										<li>оплатить аренду студии</li>
										<li>прийти и спеть</li>
										<li>оплатить доп.услуги, если таковые понадобятся.</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Как забронировать студию для моей первой записи?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Позвоните по телефону <span href="tel:++79106044424">+7 (910) 604-44-24</span> или оставьте заявку на нашем сайте.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Как оплатить запись в студии?</h3>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Позвоните по телефону <span href="tel:++79106044424">+7 (910) 604-44-24</span> или оставьте заявку на нашем сайте.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>В какое время возможна запись моей песни?</h3>							<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Запись в студии возможна в любое удобное для вас время и день недели. Мы работаем с 10:00 до 23:00.</p>
									<p>Для бронирования студии необходима предварительная запись через администратора по телефону: +7 (910) 604-44-24 или оставить заявку на нашем сайте.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Когда будет готова запись моей песни?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Запись вашей песни будет готова сразу же после окончания записи, если к ней не требуются дополнительные услуги сведения, мастеринга и др.</p>
									<p>Если вы заказали доп улуги, то сроки готовности составят от 1 до 5 дней, в зависимости от сложности проекта. Ориентировочные сроки на некоторые из услуг:</p>
									<ul>
										<li>Мастеринг - 1-2 дня</li>
										<li>Сведение - 2-3 дня</li>
										<li>Аранжировка - 7-14 дней</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Заказываю съёмку видеоролика в студии. Как подготовиться?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Для записи видеоролика в нашей студии рекомендуем заранее позаботиться о том, как вы будете выглядеть в кадре. Мы подготовили небольшие рекомендации по подбору одежды.</p>
								</div>
							</div>
						</div>
						<div className='questions__item'>
							<div className="questions__head _trigger">
								<h3>Планируем съёмку в помещениях студии. Как рассчитать оборудование для съёмки?</h3>
								<i className='icon-angles-down-solid'></i>
							</div>
							<div className="questions__collapse">
								<div className="questions__text">
									<p>Для съёмок видеоролика в нашей студии мы подготовили рекомендации по выбору светового оборудования, которого будет достаточно. Рекомендации также включают размеры помещений и вместительность для комфортного пребывания на съёмках.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Answers.propTypes = {
	baseUrl: PropTypes.string.isRequired
};