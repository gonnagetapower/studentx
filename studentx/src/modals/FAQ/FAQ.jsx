import React from "react";

import { ModalPage } from "@vkontakte/vkui";

import './FAQ.css'

const FAQ = ({ id }) => {
    return (
        <ModalPage id={id} settlingHeight={100}>
            <div className="faq">
                <span className="swipe-line"></span>
                <h1 className="faq__title">Часто задаваемые вопросы</h1>
                <h2 className="faq__descr">Сервис и помощь</h2>
                <ul className="faq__list">
                    <li className="faq_list-item">Правила пользовани площадкой</li>
                    <li className="faq_list-item">Правила предоставления услуг</li>
                    <li className="faq_list-item">Размещение объявлений</li>
                    <li className="faq_list-item">Способо оплаты</li>
                    <li className="faq_list-item">Возврат средств</li>
                </ul>
                <h2 className="faq__descr">О платформе</h2>
                <ul className="contact__list">
                    <li className="contact_list-item">О нас</li>
                    <li className="contact_list-item">Контакты</li>
                </ul>
                <div className="faq__contacts">
                          <p>Если у вас остались вопросы</p>
                          <a href = "mailto: abc@example.com">aabricos@gmail.com</a>
                </div>
            </div>
        </ModalPage>
    )
}

export default FAQ;