import React from 'react';

import { useRouter } from '@happysanta/router';

import './FilterItem.css';
import arrowDown from './../../img/arrowDownIcon.svg';

const FilterItem = ({ subTitle, setDiscipline, subModal }) => {
  const router = useRouter();
  return (
    <div className="filterItem-container">
      <div className="filterItem" onClick={() => router.pushModal(subModal)}>
        <h1 className="filterItem__title">{subTitle === '' ? 'Выбрать' : subTitle}</h1>
        <img className="filterItem__img" src={arrowDown} />
      </div>
    </div>
  );
};

export default FilterItem;
