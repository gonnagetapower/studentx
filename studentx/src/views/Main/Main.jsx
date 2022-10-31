import React, { useState } from 'react';

import { View, Panel, Group } from '@vkontakte/vkui';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/slices/taskSlice';

import './Main.css';

import bellIcon from './../../img/bellIcon.svg';
import filterIcon from './../../img/filterIcon.svg';
import { useEffect } from 'react';
import { Task } from '../../components/';

const Main = ({ id, activePanel, go, ROUTES }) => {
  const [buttonActive, setButtonActive] = useState('1');

  const onClickButton = (e) => {
    setButtonActive(e.target.id);
  };

  const dispatch = useDispatch();

  const tasksData = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);

  const getTasks = async () => {
    dispatch(fetchTasks());
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <div className="main-wrapper">
          <div className="wrapper">
            <div className="search-container">
              <div className="search">
                <input type="text" placeholder="Поиск" className="search__input" />
                <img src={bellIcon} alt="search" className="search__info-bell" />
              </div>
              <div className="button-box">
                <div id="btn"></div>
                <button
                  type="button"
                  key={1}
                  id={'1'}
                  onClick={onClickButton}
                  className={buttonActive === '1' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'}>
                  Главная
                </button>
                <button
                  key={2}
                  id={'2'}
                  onClick={onClickButton}
                  type="button"
                  className={buttonActive === '2' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'}>
                  Публикации
                </button>
              </div>
              <div className="filter">
                <img className="filter__icon" src={filterIcon} alt="filter" />
                <h2 className="filter__title">Фильтры</h2>
              </div>
            </div>
            <div className="main-container">
              {tasksData.map((obj) => (
                <Task
                  go={go}
                  ROUTES={ROUTES}
                  key={obj.id}
                  title={obj.title}
                  descr={obj.description}
                  dateOrder={obj.orderDate}
                  price={obj.price}
                  id={obj.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </View>
  );
};

export default Main;
