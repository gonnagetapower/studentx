import React, { useState } from 'react';

import { Panel } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';

import bellIcon from './../../img/bellIcon.svg';
import filterIcon from './../../img/filterIcon.svg';

import { Navigation, Header } from '../../components/';
import { MODAL_FILTER, PAGE_NOTICE } from '../../router';

import Home from './components/Home/Home';
import Publication from './components/Publication/Publication';

import './Main.css';

const Main = ({ id }) => {
  const [buttonActive, setButtonActive] = useState('2');
  const router = useRouter();

  const [snackBar, setSnackBar] = useState(null);

  const onClickButton = (e) => {
    setButtonActive(e.target.id);
  };

  return (
    <Panel id={id}>
      <Header>
        <div className="wrapper">
          <div className="search-container">
            <div className="button-box">
              <div id="btn"></div>
              <button
                type="button"
                key={1}
                id={'1'}
                onClick={onClickButton}
                className={
                  buttonActive === '1' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'
                }>
                Главная
              </button>
              <button
                key={2}
                id={'2'}
                onClick={onClickButton}
                type="button"
                className={
                  buttonActive === '2' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'
                }>
                Публикации
              </button>
            </div>
            <div className="search">
              <input type="text" placeholder="Поиск" className="search__input" />
              <img
                onClick={() => router.pushPage(PAGE_NOTICE)}
                src={bellIcon}
                alt="search"
                className="search__info-bell"
              />
            </div>
            <div className={buttonActive === '1' ? 'filter--hidden' : 'filter'}>
              <img
                onClick={() => router.pushModal(MODAL_FILTER)}
                className="filter__icon"
                src={filterIcon}
                alt="filter"
              />
              <h2
                onClick={() => router.pushModal(MODAL_FILTER)}
                className="filter__title">
                Фильтры
              </h2>
            </div>
          </div>
        </div>
      </Header>
      {buttonActive === '1' ? (
        <Home />
      ) : (
        <Publication setSnackBar={setSnackBar} snackBar={snackBar} />
      )}
      {snackBar}
      <Navigation />
    </Panel>
  );
};

// [...new Array(6)].map((index) => <SkeletonCard key={index} />

export default Main;
