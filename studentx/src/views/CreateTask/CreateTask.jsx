import React, { useState } from 'react';
import { useRouter } from '@happysanta/router';
import { PAGE_HOME, router, MODAL_DISCIPLINE, MODAL_TOWNS, MODAL_INSTITUTE } from '../../router';

import { Icon28ChevronBack } from '@vkontakte/icons';
import { PanelHeader, PanelHeaderBack, PanelHeaderButton, Panel } from '@vkontakte/vkui';

import './CreateTask.css';

import { Navigation, FilterItem, InputItem } from '../../components';
import { DateInput } from '@vkontakte/vkui';

import { useSelector, useDispatch } from 'react-redux';

import { setPrice } from '../../redux/slices/filterSlice';
import { setDiscipline } from '../../redux/slices/filterSlice';

const CreateTask = ({ id }) => {
  const router = useRouter();
  const [photoList, setPhotoList] = useState([1]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleClick = () => {
    const id = photoList.length + 1;
    setPhotoList((prev) => [
      ...prev,
      {
        id: id,
      },
    ]);
  };

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton
            aria-label="кнопка"
            onClick={() => {
              router.popPage();
            }}>
            <Icon28ChevronBack />
          </PanelHeaderButton>
        }
        before={<PanelHeaderBack />}>
        <div className="header-create">
          <h1 className="header-create__title">Создай свое объявление</h1>
        </div>
      </PanelHeader>
      <div className="create-container">
        <div className="create">
          <textarea
            placeholder="Обозначь тематику, например: написать курсовую"
            rows="1"
            className="create__input create__input--title"
            type="text"
          />
          <textarea
            placeholder="Опиши задачу, чем больше подробностей, тем лучше результат :)"
            rows="5"
            className="create__input create__input--descr"
            type="text"
          />
          <div className="photoList">
            {photoList.map((photo, key) => (
              <input
                key={key}
                id={photo.id}
                className="custom-file-input"
                type="file"
                accept=".png, .jpg, .jpeg"
              />
            ))}
            <div onClick={() => handleClick()} className="addPhoto"></div>
          </div>
          <div className="create__filter">
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
          </div>
          <div className="create__button">
            <button className="button">Опубликовать</button>
          </div>
        </div>
      </div>
      <Navigation />
    </Panel>
  );
};

export default CreateTask;
