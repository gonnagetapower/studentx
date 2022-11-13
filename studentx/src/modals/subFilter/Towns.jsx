import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setTown } from '../../redux/slices/filterSlice';
import { router } from '../../router';

import { ModalPage } from '@vkontakte/vkui';

const Towns = ({ id, subTitle }) => {
  const [searchValue, setSearchValue] = useState('');

  const discipline = useSelector((state) => state.filter.discipline);
  const dispatch = useDispatch();

  const handleTown = (item) => {
    dispatch(setTown(item));
    router.popPage();
  };

  const itemsArray = [
    'Москва',
    'Санкт-Петербург',
    'Екатеринбург',
    'Казань',
    'Нижний Новгород',
    'Челябинск',
    'Омск',
    'Ростов-на-Дону',
    'Самара',
    'Уфа',
    'Красноярск',
    'Воронеж',
    'Пермь',
    'Волгоград',
    'Саратов',
    'Тюмень',
  ];

  return (
    <div>
      <ModalPage id={id} settlingHeight={100}>
        <div className="subFilter">
          <span className="swipe-line"></span>
          <h1 className="subFilter__title">Город</h1>
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
              <h1 className="subFilter__item" onClick={() => handleTown(item)}>
                {item}
              </h1>
            ))}
        </div>
      </ModalPage>
    </div>
  );
};

export default Towns;
