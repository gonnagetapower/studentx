import React, { useState, useEffect } from 'react';

import { HorizontalScroll, Panel, PullToRefresh, Snackbar } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTasks,
  setCurrentPage,
  setRefreshStatus,
} from '../../redux/slices/taskSlice';

// import { errorIcon } from '@vkontakte/icons/src/svg/28/cancel_circle_fill_red';
import { Icon28CancelCircleFillRed } from '@vkontakte/icons';

import bellIcon from './../../img/bellIcon.svg';
import filterIcon from './../../img/filterIcon.svg';
import infoIcon from './../../img/infoIcon.svg';
import { Task, Navigation, AddButton, Header, SkeletonCard } from '../../components/';
import { MODAL_FILTER, PAGE_CREATE, PAGE_DEV, PAGE_NOTICE } from '../../router';

import './Main.css';

const Main = ({ id, go, ROUTES }) => {
  const [buttonActive, setButtonActive] = useState('2');
  const router = useRouter();

  const onClickButton = (e) => {
    setButtonActive(e.target.id);
  };

  const dispatch = useDispatch();

  const tasksData = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);
  const currentPage = useSelector((state) => state.tasks.currentPage);
  const firstFetch = useSelector((state) => state.tasks.firstFetch);
  const refreshStatus = useSelector((state) => state.tasks.refreshStatus);

  const [snackBar, setSnackBar] = useState(null);

  const getTasks = async () => {
    try {
      await dispatch(fetchTasks(currentPage)).unwrap();
    } catch (err) {
      setSnackBar(
        <Snackbar
          before={<Icon28CancelCircleFillRed />}
          layout="vertical"
          duration={900}
          onClose={() => setSnackBar(null)}>
          Ошибка сервера
        </Snackbar>,
      );
    }
  };

  useEffect(() => {
    if (currentPage < 5) {
      getTasks();
    }
  }, [currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setCurrentPage());
    }
  };

  const onRefresh = async () => {
    try {
      dispatch(setRefreshStatus(true));
      await dispatch(fetchTasks(currentPage)).unwrap();
      dispatch(setRefreshStatus(false));
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(setRefreshStatus(false)), 2000);
      setTimeout(
        () =>
          setSnackBar(
            <Snackbar
              before={<Icon28CancelCircleFillRed />}
              layout="vertical"
              duration={1700}
              onClose={() => setSnackBar(null)}>
              Ошибка сервера
            </Snackbar>,
          ),
        1500,
      );
    }
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
              <img onClick={() => router.pushPage(PAGE_NOTICE)} src={bellIcon} alt="search" className="search__info-bell" />
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
        <div className="content-container">
          <div className="content">
            <div className="create-card">
              <div className="create-card--flex">
                <h1 className="create-card__title">Создай свою публикацию</h1>
                <img className="create-card__img" src={infoIcon} alt="info" />
              </div>
              <button
                onClick={() => router.pushPage(PAGE_DEV)}
                className="button create-card--button">
                Начать
              </button>
            </div>
            <HorizontalScroll>
              <div style={{ display: 'flex' }}>
                {[...new Array(16)].map((_, index) =>
                  <h1 style={{ padding: '5px' }}>ппп</h1>
                )}
              </div>
            </HorizontalScroll>
          </div>
        </div>
      ) : (
        <div className="content-container">
          <AddButton router={router} createPanel={PAGE_CREATE} />
          <div className="content">
            <PullToRefresh onRefresh={onRefresh} isFetching={refreshStatus}>
              {firstFetch
                ? [...new Array(6)].map((index) => <SkeletonCard key={index} />)
                : tasksData.map((obj) => (
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
              {status === 'loading' ? (
                <div>
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              ) : null}
            </PullToRefresh>
          </div>
        </div>
      )}
      {snackBar}
      <Navigation />
    </Panel>
  );
};

// [...new Array(6)].map((index) => <SkeletonCard key={index} />

export default Main;
