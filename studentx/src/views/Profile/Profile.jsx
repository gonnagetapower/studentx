import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setService } from '../../redux/slices/profileSlice';
import { Panel, PanelHeader } from '@vkontakte/vkui';

import nullPhoto from './../../img/nullPhotoIcon.svg';

import Navigation from '../../components/Navigation';
import { Works, Payments, Assistance } from './components';

import './Profile.css';

const Profile = ({ id }) => {
  const service = useSelector((state) => state.profile.service);
  const dispatch = useDispatch();

  const handleService = (serviceState) => {
    dispatch(setService(serviceState));
  };

  return (
    <Panel id={id}>
      <PanelHeader>
        <div className="header-profile">
          <h1 className="header-profile__title">Профиль</h1>
        </div>
      </PanelHeader>
      <div className="profile-container">
        <div className="user-info-container">
          <img src={nullPhoto} className="user__photo" alt="user photo" />
          <div>
            <h1 className="user__name">Соня Мармеладова</h1>
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
