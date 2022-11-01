import React from 'react';

import MainIcon from './../img/homeIcon.svg';
import PublicationIcon from './../img/publicationIcon.svg';
import ProfileIcon from './../img/profileIcon.svg';
import MsgIcon from './../img/msgIcon.svg';

import { Tabbar, TabbarItem } from '@vkontakte/vkui';

import {
  PAGE_MAIN,
  PAGE_MESSAGES,
  PAGE_PROFILE,
  PAGE_PUBLICATION,
  PANEL_MESSAGES,
  PAGE_HOME,
} from '../router';

import { useLocation, useRouter } from '@happysanta/router';

const Navigation = ({ onStoryChange, activeStory }) => {
  const router = useRouter();
  const location = useLocation();
  return (
    <div>
      <Tabbar>
        <TabbarItem
          onClick={() => router.pushPage(PAGE_HOME)}
          selected={activeStory === 'main'}
          data-story="main"
          text="Главная">
          <img src={MainIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={() => router.pushPage(PAGE_PUBLICATION)}
          selected={activeStory === 'publication'}
          data-story="publication"
          text="Мои публикации">
          <img src={PublicationIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={() => router.pushPage(PAGE_MESSAGES)}
          selected={activeStory === 'messages'}
          data-story="messages"
          text="Сообщения">
          <img src={MsgIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={() => router.pushPage(PAGE_PROFILE)}
          selected={location.getPageId() === { PAGE_PROFILE }}
          data-story={PAGE_PROFILE}
          text="Профиль">
          <img src={ProfileIcon} />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Navigation;
