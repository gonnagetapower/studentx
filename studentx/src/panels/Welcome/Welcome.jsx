import { Panel } from '@vkontakte/vkui';
import React, { useEffect } from 'react';
import { PAGE_HOME, PAGE_MAIN, router } from '../../router';
import bridge from '@vkontakte/vk-bridge';

import WelcomeIcon from './../../img/Welcome.svg';

import './Welcome.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/appSlice';

const Welcome = ({ id }) => {

  const isAuth = useSelector((state) => state.app.isAuth )
  const dispatch = useDispatch()

  console.log(isAuth)

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      console.log(user);
      await bridge
        .send('VKWebAppStorageGet', {
          keys: ['login'],
        })
        .then((data) => {
          if (data.keys[0].value === 'true') {
            console.log('Данные получены');
            setTimeout(() => {
              dispatch(login(user.id, 'password')).unwrap()
              router.pushPage(PAGE_HOME);
            }, 3200);
          } else {
            setTimeout(() => {
              router.pushPage(PAGE_MAIN);
            }, 3200);
          }
        });
    }
    fetchData();
  }, []);

  return (
    <Panel id={id}>
      <div className="welcome">
        <div className="welcome-content">
          <img className="welcome__icon" src={WelcomeIcon} alt="Welcome" />
          <h1 className="welcome__title">Student Exchange</h1>
        </div>
      </div>
    </Panel>
  );
};

export default Welcome;
