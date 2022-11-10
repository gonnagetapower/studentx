import React from 'react';

import { useRouter } from '@happysanta/router';

import './FilterItem.css';
import arrowDown from './../../img/arrowDownIcon.svg';
import { MODAL_DISCIPLINE } from '../../router';

const FilterItem = ({ discipline, setDiscipline }) => {
  const router = useRouter();
  return (
    <div className="filterItem-container">
      <div className="filterItem" onClick={() => router.pushModal(MODAL_DISCIPLINE)}>
        <h1 className="filterItem__title">{discipline === '' ? 'Выбрать' : discipline}</h1>
        <img className="filterItem__img" src={arrowDown} />
      </div>
    </div>
  );
};

export default FilterItem;
