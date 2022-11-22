import { ModalPage, ModalPageHeader, DateInput } from '@vkontakte/vkui';
import React, { useState } from 'react';

import './Filter.css';
import FilterItem from '../../components/FilterItem/FilterItem';
import InputItem from '../../components/InputItem/InputItem';
import { PAGE_HOME, router, MODAL_DISCIPLINE, MODAL_TOWNS, MODAL_INSTITUTE } from '../../router';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../../redux/slices/filterSlice';

const Filter = ({ id, discipline, setDiscipline }) => {
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  console.log(filterState);

  return (
    <ModalPage id={id} settlingHeight={100}>
      <div className="filter-modal">
        <span className="swipe-line"></span>
        <ModalPageHeader>
          <div className="filter-modal__header">
            <h1 className="filter-modal__title">Фильтры</h1>
          </div>
        </ModalPageHeader>
        <h2 className="filter-modal__title">Ваша цель</h2>
        <div className="filter-modal__buttonBlock">
          <button className="button btn-left">Я исполнитель</button>
          <button className="button btn-right">Я Заказчик</button>
        </div>
        <h2 className="filter-modal__title">Предмет</h2>
        <FilterItem
          subTitle={filterState.discipline}
          setDiscipline={setDiscipline}
          subModal={MODAL_DISCIPLINE}
        />
        <h2 className="filter-modal__title">Город</h2>
        <FilterItem
          subTitle={filterState.town}
          setDiscipline={setDiscipline}
          subModal={MODAL_TOWNS}
        />
        <h2 className="filter-modal__title">Учебное заведение</h2>
        <FilterItem
          subTitle={filterState.institute}
          setDiscipline={setDiscipline}
          subModal={MODAL_INSTITUTE}
        />
        <h2 className="filter-modal__title">Сроки</h2>
        <div className="filter-modal__datepicker">
          <DateInput value={dateFrom} onChange={setDateFrom} />
          <DateInput value={dateTo} onChange={setDateTo} />
        </div>
        <h2 className="filter-modal__title">Желаемый бюджет</h2>
        <InputItem
          price={filterState.price}
          dispatch={dispatch}
          setPrice={setPrice}
          title={'Цена, ₽ '}
        />
        <div className="filter-modal__acceptbtn">
          <button onClick={() => router.pushPage(PAGE_HOME)} className="button filter-btn">
            Применить
          </button>
        </div>
      </div>
    </ModalPage>
  );
};

export default Filter;
