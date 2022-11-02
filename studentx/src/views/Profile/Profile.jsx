import React from 'react';

import { Panel, PanelHeader } from '@vkontakte/vkui';
import Navigation from '../../components/Navigation';

import nullPhoto from './../../img/nullPhotoIcon.svg';

import starIcon from './../../img/starIcon.svg';
import blankIcon from './../../img/blankIcon.svg';

import './Profile.css';

const Profile = ({ id, activePanel }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <div className="profile-container">
        <div className="user-info-container">
          <img src={nullPhoto} className="user__photo" alt="user photo" />
          <div>
            <h1 className="user__name">Соня Мармеладова</h1>
            <p className="user__status">Online</p>
          </div>
          <ul className="list">
            <li className="list-active list-link">Работы</li>
            <li className="list-link">Платежи</li>
            <li className="list-link">Поддержка</li>
          </ul>
        </div>
      </div>
      <div className="saved-tasks-wrapper">
        <div className="saved-tasks">
          <img
            className="saved-tasks__img saved-tasks__img--star"
            src={starIcon}
            alt="saved tasks"
          />
          <h2 className="saved-tasks__title">Сохраненные</h2>
        </div>
        <div className="saved-tasks">
          <img
            className="saved-tasks__img saved-tasks__img--blank"
            src={blankIcon}
            alt="completed tasks"
          />
          <h2 className="saved-tasks__title">Выполненные</h2>
        </div>
      </div>
      <Navigation />
    </Panel>
  );
};

export default Profile;
