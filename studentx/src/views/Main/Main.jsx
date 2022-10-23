import React, { useState } from 'react';

import { View, Panel, Group } from '@vkontakte/vkui';

import './Main.css';

import bellIcon from './../../img/bellIcon.svg';
import filterIcon from './../../img/filterIcon.svg';

const Main = ({ id, activePanel }) => {
  const [buttonActive, setButtonActive] = useState('1');

  const onClickButton = (e) => {
    setButtonActive(e.target.id);
  };

  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <Group style={{ height: '1000px' }}>
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
              <div className="content-item">
                <h1 className="content-item__title">Решить метрологию</h1>
                <p className="content-item__descr">
                  Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я
                  выпилюсь нахрен оч тяжко жить
                </p>
                <div className="content-info">
                  <p className="content-info__date">23 сентября, 09:32</p>
                  <p className="content-info__price">от 1.000 </p>
                  <button className="content-info__button">откликнуться</button>
                </div>
              </div>
              <div className="content-item">
                <h1 className="content-item__title">Решить метрологию</h1>
                <p className="content-item__descr">
                  Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я
                  выпилюсь нахрен оч тяжко жить
                </p>
                <div className="content-info">
                  <p className="content-info__date">23 сентября, 09:32</p>
                  <p className="content-info__price">от 1.000 </p>
                  <button className="content-info__button">откликнуться</button>
                </div>
              </div>
              <div className="content-item">
                <h1 className="content-item__title">Решить метрологию</h1>
                <p className="content-item__descr">
                  Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я
                  выпилюсь нахрен оч тяжко жить
                </p>
                <div className="content-info">
                  <p className="content-info__date">23 сентября, 09:32</p>
                  <p className="content-info__price">от 1.000 </p>
                  <button className="content-info__button">откликнуться</button>
                </div>
              </div>
              <div className="content-item">
                <h1 className="content-item__title">Решить метрологию</h1>
                <p className="content-item__descr">
                  Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я
                  выпилюсь нахрен оч тяжко жить
                </p>
                <div className="content-info">
                  <p className="content-info__date">23 сентября, 09:32</p>
                  <p className="content-info__price">от 1.000 </p>
                  <button className="content-info__button">откликнуться</button>
                </div>
              </div>
            </div>
          </div>
        </Group>
      </Panel>
    </View>
  );
};

export default Main;
