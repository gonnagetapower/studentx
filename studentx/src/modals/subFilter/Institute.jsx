import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setInstitute } from '../../redux/slices/filterSlice';
import { setTaskInstitute } from '../../redux/slices/createTaskSlice';
import { router } from '../../router';

import { ModalPage, SimpleCell } from '@vkontakte/vkui';
import { useLocation } from '@happysanta/router';

import './subFilter.css';

const Institute = ({ id, subTitle }) => {
  const [searchValue, setSearchValue] = useState('');

  const discipline = useSelector((state) => state.filter.discipline);
  const dispatch = useDispatch();

  // const handleInstitute = (item) => {
  //   dispatch(setInstitute(item));
  //   router.popPage();
  // };

  const location = useLocation();

  const handleInstitute = (item) => {
    if (location.route.pageId.includes('/create')) {
      dispatch(setTaskInstitute(item));
      router.popPage();
    } else {
      dispatch(setInstitute(item));
      router.popPage();
    }
  };

  const itemsArray = [
    'Московский государственный университет им. М. В. Ломоносова  ',
    'Московский физико-технический институт',
    'Высшая школа экономики',
    'Санкт-Петербургский государственный университет',
    'Национальный исследовательский ядерный университет “МИФИ”',
    'Московский государственный технический университет им. Н. Э. Баумана',
    'Московский государственный институт международных отношений МИД РФ ',
    'Санкт-Петербургский политехнический университет Петра Великого',
    'Национальный исследовательский Томский политехнический университет',
    'Российская академия народного хозяйства и государственной службы при Призиденте РФ',
    'Уральский федеральный университет им. Б. Н. Ельцины',
  ];

  return (
    <ModalPage id={id} settlingHeight={100}>
      <div className="subFilter">
        <span className="swipe-line"></span>
        <h1 className="subFilter__title">Институт</h1>
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
            <div className="subFilter__item">
              <SimpleCell
                Component="label"
                activeMode="activeItem"
                multiline={true}
                onClick={() => handleInstitute(item)}>
                {item}
              </SimpleCell>
            </div>
          ))}
      </div>
    </ModalPage>
  );
};

export default Institute;
