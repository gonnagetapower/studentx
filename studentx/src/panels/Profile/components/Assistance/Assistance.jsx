import React from 'react';

import helpIcon from './../../../../img/helpIcon.svg';
import './Assistance.css';

const Assistance = () => {
  return (
    <div className="assistance">
      <div className="assistance-content">
        <img className="assistance-content__icon " src={helpIcon} alt="payment in local currency" />
        <div className="assistance-item">
          <p className="assistance-item__title">Информация</p>
        </div>
        <div className="arrow-right"></div>
      </div>
      <div className="support">
        <h2 className="support__title">Служба поддержки</h2>
        <p className="support__descr">Если вы не нашли решение, напиши в службу поддержки</p>
        <button className="support__button">Задать вопрос</button>
      </div>
    </div>
  );
};

export default Assistance;
