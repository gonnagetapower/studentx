import { useRouter } from '@happysanta/router';
import React from 'react';
import { MODAL_FAQ } from '../../../../router';

import helpIcon from './../../../../img/helpIcon.svg';
import './Assistance.css';

const Assistance = () => {
  const router = useRouter()
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
        <button onClick={() => router.pushModal(MODAL_FAQ) } className="support__button">Задать вопрос</button>
      </div>
    </div>
  );
};

export default Assistance;
