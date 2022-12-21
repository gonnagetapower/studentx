import { useLocation } from '@happysanta/router';
import { ModalPage, Title } from '@vkontakte/vkui';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDiscipline } from '../../redux/slices/filterSlice';
import { setTaskDiscipline } from '../../redux/slices/createTaskSlice';
import { router } from '../../router';

import './subFilter.css';

const Discipline = ({ id, subTitle }) => {
  const location = useLocation();

  const discipline = useSelector((state) => state.filter.discipline);
  const dispatch = useDispatch();

  const handleDiscipline = (dis) => {
    if (location.route.pageId.includes('/create')) {
      dispatch(setTaskDiscipline(dis));
      router.popPage();
    } else {
      dispatch(setDiscipline(dis));
      router.popPage();
    }
  };

  const [searchValue, setSearchValue] = useState('');

  const itemsArray = [
    'Астрономия',
    'Философия',
    'История',
    'География',
    'Экономика',
    'Социология',
    'Литературоведение',
    'Политология',
    'Психология',
    'Журналистика',
    'Биология',
    'Товароведение',
    'Менеджмент',
    'Юриспруденция',
    'Моделирование и анализ',
    'Программная инженерия',
  ];

  return (
    <div>
      <ModalPage id={id} settlingHeight={100}>
        <div className="subFilter">
          <span className="swipe-line"></span>
          <h1 className="subFilter__title">Предмет</h1>
          <div className="subFilter__search">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className="subFilter__input"
              type="text"
              placeholder="Поиск"
            />
          </div>
          {itemsArray
            .filter((item) => {
              if (searchValue === '') {
                return item;
              } else if (item.toLowerCase().includes(searchValue.toLowerCase())) {
                return item;
              }
            })
            .map((item) => (
              <h1 className="subFilter__item" onClick={() => handleDiscipline(item)}>
                {item}
              </h1>
            ))}
        </div>
      </ModalPage>
    </div>
  );
};

export default Discipline;
