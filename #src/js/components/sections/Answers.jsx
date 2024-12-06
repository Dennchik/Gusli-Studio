import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { animateTitles } from '../../animations/animations.jsx';
// import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';

export const Answers = () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	useEffect(() => {
		if (!isMobile) {
			animateTitles(
				'.questions__title',
				'.questions__title',
				'.questions__title',
				'=150',
				'=150',
			);
		}
	}, []);

	useEffect(() => {

		document.querySelectorAll('[data-spoiler]').forEach(function
			(spoilerGroup) {
			const itsSpoilers =
				spoilerGroup.querySelectorAll('.questions__list');

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
		// createWaveBackground();
	}, []);

	return (
		<div className='questions _container'>
			<div className="questions__body" data-spoiler="">
				<div className='questions__title'>Вопросы и ответы</div>
				<div className='questions__list'>
					<div className='questions__item _collapsed'>
						<div className="questions__head _trigger">
							<h3>Что нужно для&nbsp;успешной записи песни?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Как минимум: не&nbsp;есть орехи, не&nbsp;пить холодное
									и&nbsp;зелёный чай (иначе будет першить в&nbsp;горле,
									и&nbsp;это негативно отразится на&nbsp;голосе и&nbsp;общем
									результате записи)..</p>
								<p>Можете взять 50&nbsp;мл коньячку, если&nbsp;вам
									так&nbsp;будет комфортнее. Ну&nbsp;или мы вам&nbsp;нальём
									для&nbsp;расслабления связок. (Алкоголь в&nbsp;небольших
									дозах раскрепощает и&nbsp;дает расслабиться
									перед&nbsp;записью).</p>
								<p>В идеале: попить горячего чая. Это разогреет ваши голосовые
									связки (что&nbsp;положительно скажется на&nbsp;голосе).</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Сколько времени нужно бронировать для&nbsp;записи одной
								песни?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Если вы первый раз в студии, то&nbsp;рекомендуем
									для&nbsp;начала взять 2-3 часа. Вам&nbsp;надо будет
									раскрепоститься, настроиться на&nbsp;запись, войти
									в&nbsp;контакт со&nbsp;звукорежиссёром, который будет отвечать
									за&nbsp;то, чтобы вы&nbsp;не&nbsp;стеснялись и «раскрылись»
									в&nbsp;полной мере.</p>
								<p>Если вы хотите пригласить педагога по&nbsp;вокалу
									(об&nbsp;этом чуть ниже написано в&nbsp;пункте «Если я плохо
									пою…»), то&nbsp;рекомендуется взять 4-5 часов,
									разбив&nbsp;их&nbsp;на&nbsp;2 дня – в&nbsp;первый день
									позаниматься с&nbsp;педагогом по&nbsp;вокалу в&nbsp;самой
									студии, и&nbsp;во&nbsp;второй день уже&nbsp;записать голос
									с&nbsp;разогретыми и&nbsp;тренированными голосовыми
									связками.</p>
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
								<p>Ответьте себе на&nbsp;вопрос: Какую цель
									вы&nbsp;преследуете записью песни? От&nbsp;этого зависят
									варианты набора услуг звукозаписи, которые
									вам&nbsp;потребуются:</p>
								<p>«Я хочу просто попробовать для&nbsp;себя» Если просто
									попробовать – это&nbsp;одно дело, и&nbsp;тут не&nbsp;стоит
									брать все услуги разом, чтобы на&nbsp;выходе получить
									радийный формат песни. «Хочу песню
									как&nbsp;у&nbsp;профессионального певца!» Если&nbsp;хотите
									сделать профессиональную запись, и&nbsp;звучать, как&nbsp;ваш
									любимый артист по&nbsp;радио – это другое дело. И
									нам&nbsp;есть, чт&nbsp;предложить вам.</p>
								<p>Так же следует понимать, под&nbsp;какую музыку
									вы&nbsp;будете петь?</p>
								<p>Мы настоятельно рекомендуем тщательно подбирать минусовки
									(инструменталы), чтобы&nbsp;они качественно звучали (хотя
									бы&nbsp;320кб/с mp3 ), но&nbsp;сразу предупредим: подобный
									формат сильно ограничит на&nbsp;стадии сведения
									и&nbsp;мастеринга, и&nbsp;сделать с&nbsp;таким треком чудо
									звучания будет крайне трудно, т.к.&nbsp;музыка
									уже&nbsp;будет сведённая (не&nbsp;под&nbsp;ваш голос),
									и&nbsp;сжата сайтом, с&nbsp;которого вы&nbsp;скачаете
									минусовку.</p>
								<p>Но есть варианты, как&nbsp;выйти из&nbsp;положения (читать
									ниже)</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Я хочу, чтобы инструментал звучал качественно,
								а&nbsp;в&nbsp;интернете
								такой версии не удалось найти. Что делать?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Допустим, вы&nbsp;хотите перепеть для&nbsp;себя песню «Я
									уеду жить в&nbsp;Лондон» или «О, Боже, какой мужчина» или
									«Вокруг шум», но найти в&nbsp;интернете инструментал
									(минусовку) хорошего качества вы не&nbsp;смогли,
									но&nbsp;спеть хочется – не отчаивайтесь.</p>
								<p>Мы напишем для&nbsp;вас точно такую&nbsp;же аранжировку
									«с&nbsp;нуля», и&nbsp;вы не&nbsp;сможете найти отличия.
									Права на&nbsp;музыку, конечно&nbsp;же, будут принадлежать
									композиторам, написавшим оригинал, так&nbsp;что использовать
									коммерчески вы не&nbsp;сможете свою запись,
									но&nbsp;порадовать себя и&nbsp;близких качественным
									звучанием сможете без проблем.</p>
								<p>Написание такой мелодии – копирки идёт от&nbsp;7 000
									рублей.
									Более подробно об&nbsp;услуге «Аранжировка» можно почитать
									здесь.</p>
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
								<p>Если вы хотите подарить подарок другу, второй половинке /
									коллеге / начальнику, чтобы они наконец записали песню,
									то&nbsp;идеальным решением будет – подарить им наш
									подарочный набор с деревянной аудиокассетой.</p>
								<p>Номинальная стоимость такого набора – от 15 000 рублей. Вы
									можете внести любую сумму, чтобы одаряемый сам мог выбрать
									те&nbsp;услуги, которые ему действительно нужны. Возможно,
									добавить какие-то доп.услуги по&nbsp;спец.цене. Подробности
									уточняйте у менеджеров студии.</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Я хочу спеть песню на собственную мелодию (насвистел в душе
								или напел себе под нос, когда мыл посуду).
								Что&nbsp;тогда?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Вообще отлично! Наши аранжировщики без&nbsp;труда уловят
									вашу
									мелодию (надо будет посидеть и негромко посвистеть им
									на&nbsp;ушко), и&nbsp;предложат вам дальнейшие варианты
									аранжировки. Вы получите полностью авторскую музыку, права
									на&nbsp;которую будут только у&nbsp;вас! Стоит такая услуга
									– от&nbsp;20 000 руб.</p>
								<p>Более подробно об услуге «Аранжировка» можно почитать
									здесь</p>
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
								<p>Берите всех друзей и коллег – будет весело!
									p.s.&nbsp;Пожалуйста, предупредите менеджеров студии, если
									вы планируете прийти с&nbsp;маленьким ребёнком – мы
									подготовим всё для удобства дитя и&nbsp;молодых
									родителей.</p>
								<p>Обратите внимание, что при&nbsp;бронировании студии
									для&nbsp;группы более, чем из 7 человек, аренда студии стоит
									3 000 руб/час. Подробнее об&nbsp;услуге.</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Что ещё мне может понадобиться во&nbsp;время записи?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<ul>
									<li>Музыка, под&nbsp;которую будете петь (об&nbsp;этом выше
										рассказано)
									</li>
									<li>Слова (если у вас в&nbsp;репертуаре
										нет&nbsp;художественного
										свиста)
									</li>
									<li>Педагог по вокалу – в идеале. Если у вас есть свой –
										приходите с&nbsp;ним, если нет, то&nbsp;мы пригласим
										одного из&nbsp;своих проверенных педагогов, которые
										«ставили голоса» даже в&nbsp;самых запущенных случаях.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>
								Если я плохо пою, можно что-нибудь с&nbsp;этим сделать
								на&nbsp;записи?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<ul>
									<li>Мы уже говорили о важности репетиции (распевки)
										с&nbsp;педагогом по вокалу, но&nbsp;так&nbsp;же
										рекомендуем, чтобы педагог присутствовал во&nbsp;время
										записи – он&nbsp;сможет оперативно подсказывать
										и&nbsp;вытягивать вашу запись, что&nbsp;в&nbsp;дальнейшем
										может помочь сэкономить на&nbsp;аренде студии
										(для&nbsp;перепевания, например).
									</li>
									<li>Можно заказать услугу «Тюнинг вокала» (цифровое
										выравнивание фальшиво спетых нот) – это&nbsp;может
										значительно улучшить качество голоса. Но, несмотря
										на&nbsp;эту волшебную услугу, мы всё равно рекомендуем
										позаниматься с&nbsp;педагогом по&nbsp;вокалу. Тюнинг
										не&nbsp;даёт гарантию того, что&nbsp;вы сразу станете
										звучать, как&nbsp;Дмитрий Хворостовский, но&nbsp;может
										значительно приблизить ваш голос к&nbsp;правильно спетой
										партии песни.
									</li>
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
									<li>если для себя, то&nbsp;можем сделать вам нужное кол-во
										экземпляров на&nbsp;CD или&nbsp;Flash-носителе и&nbsp;даже
										на&nbsp;виниле в&nbsp;авторском стиле и&nbsp;с&nbsp;вашей
										обложкой, если душа захочет (она&nbsp;хочет,
										как&nbsp;правило)
									</li>
									<li>если вы – артист, который хочет сделать профессиональную
										запись и попробовать сделать промо своей записи,
										не&nbsp;потравив при&nbsp;этом последние деньги,
										то&nbsp;мы предложим различные варианты продвижения
										как&nbsp;на радио, так&nbsp;и&nbsp;на&nbsp;популярные
										интернет-площадки. Нам нет смысла предлагать неработающие
										каналы распространения – мы&nbsp;бы не&nbsp;стали
										рисковать своей репутацией, к том&nbsp;же, мы первые, кто
										заинтересован, чтобы&nbsp;ваш материал хорошо звучал
										на&nbsp;популярных площадках.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Я хочу записать песню, что мне для&nbsp;этого нужно?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<ul>
									<li>выбрать репертуар</li>
									<li>отрепетировать песню, которую вы хотите записать</li>
									<li>забронировать студию для вашей записи, а так&nbsp;же
										рассказать менеджеру студии о&nbsp;том, что&nbsp;вы будете
										записывать, чтобы&nbsp;мы могли подготовиться заранее
										к&nbsp;вашей записи
									</li>
									<li>оплатить аренду студии</li>
									<li>прийти и спеть</li>
									<li>оплатить доп.услуги, если&nbsp;таковые понадобятся.</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Как забронировать студию для&nbsp;моей первой записи?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Позвоните по&nbsp;телефону&ensp;
									<a href="tel:++79106044424">+7 (910) 604-44-24</a>&ensp;
									или&nbsp;оставьте заявку на&nbsp;нашем сайте.</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Как оплатить запись в&nbsp;студии?</h3>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Позвоните по телефону:&nbsp;<a href="tel:++79106044424">+7
									(910) 604-44-24</a>&ensp;
									или оставьте заявку на нашем сайте.</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>В какое время возможна запись моей песни?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Запись в студии возможна в любое удобное для&nbsp;вас время
									и&nbsp;день недели. Мы&nbsp;работаем с&nbsp;10:00 до 23:00.
								</p>
								<p>Для бронирования студии необходима предварительная запись
									через&nbsp;администратора по&nbsp;телефону:&nbsp;
									<a href="tel:++79106044424">+7 (910)
										604-44-24 </a>&ensp;или&nbsp;оставить заявку на&nbsp;нашем
									сайте.</p>
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
								<p>Запись вашей песни будет готова сразу же&nbsp;после
									окончания записи, если к&nbsp;ней не&nbsp;требуются
									дополнительные услуги сведения, мастеринга и&nbsp;др.</p>
								<p>Если вы заказали доп услуги, то&nbsp;сроки готовности
									составят от&nbsp;1&nbsp;до&nbsp;5&nbsp;дней,
									в&nbsp;зависимости от&nbsp;сложности проекта.
									Ориентировочные сроки на&nbsp;некоторые из&nbsp;услуг:</p>
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
							<h3>Заказываю съёмку видеоролика в&nbsp;студии.
								Как&nbsp;подготовиться?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Для&nbsp;записи видеоролика в&nbsp;нашей студии рекомендуем
									заранее
									позаботиться о&nbsp;том, как&nbsp;вы будете выглядеть
									в&nbsp;кадре. Мы&nbsp;подготовили небольшие рекомендации
									по&nbsp;подбору одежды.</p>
							</div>
						</div>
					</div>
					<div className='questions__item'>
						<div className="questions__head _trigger">
							<h3>Планируем съёмку в&nbsp;помещениях студии.
								Как&nbsp;рассчитать оборудование для&nbsp;съёмки?</h3>
							<i className='icon-angles-down-solid'></i>
						</div>
						<div className="questions__collapse">
							<div className="questions__text">
								<p>Для съёмок видеоролика в&nbsp;нашей студии
									мы&nbsp;подготовили рекомендации по&nbsp;выбору светового
									оборудования, которого будет достаточно. Рекомендации
									также&nbsp;включают размеры помещений и&nbsp;вместительность
									для&nbsp;комфортного пребывания на&nbsp;съёмках.</p>
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