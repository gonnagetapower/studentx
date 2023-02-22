import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setService } from '../../redux/slices/profileSlice';
import { Panel, PanelHeader } from '@vkontakte/vkui';

import nullPhoto from './../../img/nullPhotoIcon.svg';

import { Header, Navigation } from '../../components';
import { Works, Payments, Assistance } from './components';

import './Profile.css';

const Profile = ({ id }) => {
  const service = useSelector((state) => state.profile.service);
  const myProfile = useSelector((state) => state.profile.myProfile);
  console.log(myProfile);
  const dispatch = useDispatch();

  const handleService = (serviceState) => {
    dispatch(setService(serviceState));
  };

  return (
    <Panel id={id}>
      <Header>
        <h1 className="header__title">Профиль</h1>
      </Header>
      <div className="profile-container">
        <div className="user-info-container">
          <img
            src={myProfile ? myProfile.photo_100 : nullPhoto}
            className="user__photo"
            alt="user photo"
          />
          <div>
            <h1 className="user__name">
              {myProfile.first_name} {myProfile.last_name}
            </h1>
            <p className="user__status">Online</p>
          </div>
          <ul className="list">
            <button
              className={service == 'Works' ? 'list-active list-link' : 'list-link'}
              onClick={() => handleService('Works')}>
              Работы
            </button>
            <button
              className={service == 'Payments' ? 'list-active list-link' : 'list-link'}
              onClick={() => handleService('Payments')}>
              Платежи
            </button>
            <button
              className={service == 'Assistance' ? 'list-active list-link' : 'list-link'}
              onClick={() => handleService('Assistance')}>
              Поддержка
            </button>
          </ul>
        </div>
      </div>
      <div className="list-content-wrapper">
        {(() => {
          switch (service) {
            case 'Works':
              return <Works />;
            case 'Payments':
              return <Payments />;
            case 'Assistance':
              return <Assistance />;
            default:
              return null;
          }
        })()}
      </div>
      <Navigation />
    </Panel>
  );
};

export default Profile;
