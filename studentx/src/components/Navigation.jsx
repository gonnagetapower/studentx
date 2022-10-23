import React from 'react';

import MainIcon from './../img/homeIcon.svg';
import PublicationIcon from './../img/publicationIcon.svg';
import ProfileIcon from './../img/profileIcon.svg';
import MsgIcon from './../img/msgIcon.svg';

import { Tabbar, TabbarItem } from '@vkontakte/vkui';

const Navigation = ({ onStoryChange, activeStory }) => {
  return (
    <div>
      <Tabbar>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === 'main'}
          data-story="main"
          text="Главная">
          <img src={MainIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === 'publication'}
          data-story="publication"
          text="Мои публикации">
          <img src={PublicationIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === 'messages'}
          data-story="messages"
          text="Сообщения">
          <img src={MsgIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === 'profile'}
          data-story="profile"
          text="Профиль">
          <img src={ProfileIcon} />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Navigation;
