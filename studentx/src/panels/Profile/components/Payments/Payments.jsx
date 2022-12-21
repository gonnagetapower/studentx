import React from 'react';

import walletIcon from './../../../../img/walletIcon.svg';
import diamondIcond from './../../../../img/diamondIcon.svg';
import plusIcon from './../../../../img/plusIcon.svg';
import cardPlug from './../../../../img/cardPlug.svg';

import './Payments.css';
import ListItem from '../../../../components/ListItem/ListItem';

const Payments = () => {
  return (
    <>
      <ListItem img={walletIcon} title={'10 Р'} descr={'Рубли'} />
      <div className="card">
        <div className="card-content">
          <img className="card-content__img" src={cardPlug} alt="card photo" />
        </div>
      </div>
      <ListItem img={plusIcon} title={'Добавить'} />
    </>
  );
};

export default Payments;
