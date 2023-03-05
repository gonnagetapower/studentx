import { useLocation } from '@happysanta/router';
import { ModalPage, ScreenSpinner, SimpleCell, Title } from '@vkontakte/vkui';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDiscipline } from '../../redux/slices/filterSlice';
import { setTaskDiscipline } from '../../redux/slices/createTaskSlice';
import { router } from '../../router';

import './subFilter.css';
import axios from 'axios';

const Discipline = ({ id, subTitle }) => {
  const location = useLocation();

  const discipline = useSelector((state) => state.filter.discipline);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCatigories = () => {
      axios.get('https://mtimofeev.fun/api/v2/categories')
        .then((data) => {
          setCategories(data.data)
        })
    }
    fetchCatigories()
  }, [])

  const handleDiscipline = (dis) => {
    if (location.route.pageId.includes('/create')) {
      dispatch(setTaskDiscipline(dis));
      router.popPage();
    } else {
      dispatch(setDiscipline(dis));
      router.popPage();
    }
  };


  if (!categories) {
    return <ScreenSpinner />
  }

  return (
    <ModalPage id={id} settlingHeight={"100"} onClose={() => router.popPage()}>
      <div style={{ height: '100vh' }} className="subFilter">
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
        {categories
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
                onClick={() => handleDiscipline(item.name)}>
                {item.name}
              </SimpleCell>
            </div>
          ))}
      </div>
    </ModalPage>
  );
};

export default Discipline;
