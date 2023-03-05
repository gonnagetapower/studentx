import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const location = useLocation();

  const [universities, setUniversities] = useState([])

  useEffect(() => {
    const fetchUniversities = () => {
      axios.get('https://mtimofeev.fun/api/v2/universities')
        .then((data) => {
          setUniversities(data.data)
        })
    }
    fetchUniversities()
  }, [])


  const handleInstitute = (item) => {
    if (location.route.pageId.includes('/create')) {
      dispatch(setTaskInstitute(item));
      router.popPage();
    } else {
      dispatch(setInstitute(item));
      router.popPage();
    }
  };


  return (
    <ModalPage id={id} settlingHeight={100}>
      <div style={{ height: '100vh' }} className="subFilter">
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
        {universities
          .filter((item) => {
            if (searchValue === '') {
              return item;
            } else if (item.toLowerCase().includes(searchValue.toLowerCase())) {
              return item;
            }
          })
          .map((item) => (
            <div key={item.id} className="subFilter__item">
              <SimpleCell
                Component="label"
                activeMode="activeItem"
                multiline={true}
                onClick={() => handleInstitute(item.name)}>
                {item.name}
              </SimpleCell>
            </div>
          ))}
      </div>
    </ModalPage>
  );
};

export default Institute;
