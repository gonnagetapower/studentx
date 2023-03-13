import { Panel } from '@vkontakte/vkui';
import React, { useEffect } from 'react';
import { PAGE_HOME, PAGE_MAIN, router } from '../../router';
import bridge from '@vkontakte/vk-bridge';

import WelcomeIcon from './../../img/Welcome.svg';
import Lottie from 'lottie-react';
import book from './../../img/animation/book.json';

import './Welcome.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUser } from '../../redux/slices/appSlice';
import { setMyProfile } from '../../redux/slices/profileSlice';

const Welcome = ({ id }) => {
  const isAuth = useSelector((state) => state.app.isAuth);
  const dispatch = useDispatch();

  console.log(isAuth);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      dispatch(setUser(user));
      console.log(user);
      await bridge
        .send('VKWebAppStorageGet', {
          keys: ['login'],
        })
        .then((data) => {
          if (data.keys[0].value === 'true') {
            console.log('Данные получены');
            setTimeout(() => {
              dispatch(login(user.id, 'password')).unwrap();
              dispatch(setMyProfile(user));
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
          {/* <img className="welcome__icon" src={WelcomeIcon} alt="Welcome" /> */}
          <div className="welcome__icon">
            <Lottie animationData={book} loop={true} />
          </div>
          <h1 className="welcome__title">Student Exchange</h1>
        </div>
      </div>
    </Panel>
  );
};

export default Welcome;
