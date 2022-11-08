import React from 'react';

import walletIcon from './../../../../img/walletIcon.svg';
import diamondIcond from './../../../../img/diamondIcon.svg';
import plusIcon from './../../../../img/plusIcon.svg';
import cardPlug from './../../../../img/cardPlug.svg';

import './Payments.css';

const Payments = () => {
  return (
    <div className="payment">
      <div className="pay-way">
        <img className="pay-way__icon" src={diamondIcond} alt="payment in local currency" />
        <div className="pay">
          <p className="pay-way__title">10 Б</p>
          <p className="pay-way__title">Бонусы</p>
        </div>
        <div className="arrow-right"></div>
      </div>
      <div className="pay-way">
        <img className="pay-way__icon" src={walletIcon} alt="payment in rubles" />
        <div className="pay">
          <p className="pay-way__title">10 Р</p>
          <p className="pay-way__title">Рубли</p>
        </div>
        <div className="arrow-right"></div>
      </div>
      <div className="card">
        <div className="card-content">
          <img className="card-content__img" src={cardPlug} alt="card photo" />
        </div>
      </div>
      <div className="pay-way">
        <img className="pay-way__icon" src={plusIcon} alt="add more payments" />
        <div className="pay">
          <p className="pay-way__title">Добавить</p>
        </div>
        <div className="arrow-right"></div>
      </div>
    </div>
  );
};

export default Payments;
