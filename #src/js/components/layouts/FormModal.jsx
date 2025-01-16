import React, { useEffect, useState } from 'react';
import { buttonShow } from '../../animations/anime-js.jsx';
import modalOpen from '../../modules/modalOpen.js';

export const FormModal = () => {
	useEffect(() => {
		buttonShow();
		modalOpen();
	}, []);

	const [isChecked, setIsChecked] = useState(true);

	// Обработчик изменения состояния чекбокса
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="order-place">
			<div className="order-place__container">
				<div className="order-place__drawer">
					<div className="order-place__line">
						<div className="order-place__title">Оставить заявку</div>
						<div className="order-place__close-button _close-button">
							<i className="icon-angles-down-solid"></i>
						</div>
					</div>
					<div className="order-place__body">
						<form className="form-order order-place__form"
							id="form-order"
							method="get"
							action="">
							<div className="order-place__row">
								<div className="form-order__column">
									<div className="form-order__input">
										<input className="input"
											type="text"
											id="name"
											name="name"
											placeholder="Имя"
											autoComplete="on"
											aria-label="Имя заказчика"
											required="required" />
									</div>
								</div>
								<div className="form-order__column">
									<div className="form-order__input">
										<input className="input"
											id="email"
											name="email"
											type="text"
											autoComplete="on"
											aria-label="Электронная почта"
											placeholder="Email" />
									</div>
								</div>
								<div className="form-order__column">
									<div className="form-order__input">
										<input className="input"
											type="text"
											name="phone"
											placeholder="Телефон"
											autoComplete="on"
											aria-label="Телефон"
											required="required" />
									</div>
								</div>
							</div>
							<div className="order-place__row">
								<textarea className="form-order__message"
									id="message"
									name="message"
									placeholder="Сообщение"
									autoComplete="off"
									aria-label="Сообщение"
									required="required"></textarea>
							</div>
							<div className="order-place__row">
								<div className="form-order__checkbox">
									<div className="checkbox">
										<input className="checkbox__input"
											id="form-agreement"
											name="agreement"
											type="checkbox"
											onChange={handleCheckboxChange} />
										<label className="checkbox__label"
											htmlFor="form-agreement">
											<span className="icon">
												<i className="icon-angle-down"></i>
											</span>
											<span>Я согласен с&nbsp;
												<a href="#">условиями </a>
												предоставления услуг и&nbsp;политикой конфиденциальности
											</span>
										</label>
									</div>
								</div>
							</div>
							<div className="order-place__row">
								<div className="order-place__button">
									<button className="submit-button btn-grad"
										form="form-order"
										aria-label="отправить"
										type={'submit'}>
										<span>отправить</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};