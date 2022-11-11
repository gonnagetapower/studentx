import { ModalPage, Title } from '@vkontakte/vkui';
import React from 'react';
import { useState } from 'react';
import { router } from '../../router';

import './Discipline.css';

const Discipline = ({ id, discipline, setDiscipline }) => {
  const handleDiscipline = (dis) => {
    setDiscipline(dis);
    router.popPage();
  };

  const [searchValue, setSearchValue] = useState('');

  const disciplineArray = [
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
        <div className="discipline">
          <span className="swipe-line"></span>
          <h1 className="discipline__title">Предмет</h1>
          <div className="discipline__search">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className="discipline__input"
              type="text"
              placeholder="Поиск"
            />
          </div>
          {disciplineArray
            .filter((item) => {
              if (searchValue === '') {
                return item;
              } else if (item.toLowerCase().includes(searchValue.toLowerCase())) {
                return item;
              }
            })
            .map((item) => (
              <h1 className="discipline__item" onClick={() => handleDiscipline(item)}>
                {item}
              </h1>
            ))}
        </div>
      </ModalPage>
    </div>
  );
};

export default Discipline;
