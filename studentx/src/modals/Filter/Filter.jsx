import { ModalPage, usePlatform, ModalPageHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import React from 'react';

import './Filter.css';
import FilterItem from '../../components/FilterItem/FilterItem';
import { useState } from 'react';
import InputItem from '../../components/InputItem/InputItem';
import { PAGE_HOME, router } from '../../router';

const Filter = ({ id, discipline, setDiscipline }) => {
  return (
    <ModalPage id={id} settlingHeight={100}>
      <div className="filter-modal">
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
        <FilterItem discipline={discipline} setDiscipline={setDiscipline} />
        <h2 className="filter-modal__title">Город</h2>
        <FilterItem discipline={discipline} setDiscipline={setDiscipline} />
        <h2 className="filter-modal__title">Учебное заведение</h2>
        <FilterItem discipline={discipline} setDiscipline={setDiscipline} />
        <h2 className="filter-modal__title">Сроки</h2>
        <InputItem title={'С'} />
        <InputItem title={'До'} />
        <h2 className="filter-modal__title">Желаемый бюджет</h2>
        <InputItem title={'Цена, ₽ '} />
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
