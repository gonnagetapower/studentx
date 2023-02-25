import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Group, HorizontalScroll, HorizontalCell } from '@vkontakte/vkui';

import { useSelector } from 'react-redux';

import { MiniTask, Task } from './../../../../components';
import infoIcon from './../../../../img/infoIcon.svg';
import { useRouter } from '@happysanta/router';

import { PAGE_DEV } from '../../../../router';

import './Home.css';

const Home = () => {
  const router = useRouter();

  /// MainSwitch

  const [watch, setWatch] = useState([]);

  // const lastWatchedId = useSelector((state) => state.app.lastWatch);
  let lastWatchedId = JSON.parse(localStorage.getItem('lastWatchedPost'));

  if (localStorage.getItem('lastWatchedPost')) {
    lastWatchedId = JSON.parse(localStorage.getItem('lastWatchedPost'));
  } else {
    lastWatchedId = []
  }

  console.log(lastWatchedId);

  const responce = [];

  useEffect(() => {
    let unicLastWatched = lastWatchedId.filter((item, pos) => {
      return lastWatchedId.indexOf(item) === pos;
    });

    for (let i = 0; i < unicLastWatched.length; i++) {
      axios
        .get(`https://mtimofeev.fun/api/v2/tasks/${unicLastWatched[i]}`)
        .then((data) => {
          responce.push(data.data);
          setWatch([...responce]);
          // setWatch([...watch, data.data]);
          console.log(responce);
        });
    }
  }, []);

  return (
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
        <div className="home-content">
          <h1 className="home__title">Просмотренные посты</h1>
          <div className="viewed-post">
            {watch.length > 0 ? (
              <HorizontalScroll
                showArrows
                arrowSize="m"
                getScrollToLeft={(i) => i - 120}
                getScrollToRight={(i) => i + 120}>
                <div style={{ display: 'flex' }}>
                  {watch.map((watch) => (
                    <MiniTask
                      key={watch.id}
                      title={watch.title}
                      descr={watch.description}
                      dateOrder={watch.deliveryDate}
                      id={watch.id}
                    />
                  ))}
                </div>
              </HorizontalScroll>
            ) : (
              <>
                <h1 className="empty-post">Нет просмотренны постов</h1>
              </>
            )}
          </div>
          <Group>
            <div className="about">
              <h1 className="about__title">Добро пожаловать в приложении StudentX</h1>
              <p className="about__descr">
                Здесь вы сможете проявить себя, решая различные задачи, и получать выгоду.
                А так же можете найти решение своей задачи!
              </p>
            </div>
          </Group>
        </div>
      </div>
    </div>
  );
};

export default Home;
