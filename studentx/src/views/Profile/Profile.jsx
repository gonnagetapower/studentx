import React, { useState } from 'react';

import { Panel, PanelHeader } from '@vkontakte/vkui';
import Navigation from '../../components/Navigation';

import nullPhoto from './../../img/nullPhotoIcon.svg';

import { Works, Payments, Assistance } from './components';

import './Profile.css';

const Profile = ({ id, activePanel }) => {
  // switch case logic
  const [service, setService] = useState('Works');

  const handleService = (serviceState) => {
    setService(serviceState);
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
      <div className="saved-tasks-wrapper">
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
