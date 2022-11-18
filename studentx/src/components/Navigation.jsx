import React, { useState } from 'react';

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
  const [selected, setSelected] = useState('');
  const router = useRouter();
  const location = useLocation();

  const handlePage = (page) => {
    router.pushPage(page);
    setSelected(page);
    console.log(selected);
  };

  return (
    <div>
      <Tabbar>
        <TabbarItem
          onClick={() => handlePage(PAGE_HOME)}
          selected={selected === '/home'}
          data-story="main"
          text="Главная">
          <img src={MainIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={() => handlePage(PAGE_PUBLICATION)}
          selected={selected === '/publication'}
          data-story="publication"
          text="Мои публикации">
          <img src={PublicationIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={() => handlePage(PAGE_MESSAGES)}
          selected={selected === '/messages'}
          data-story="messages"
          text="Сообщения">
          <img src={MsgIcon} />
        </TabbarItem>
        <TabbarItem
          onClick={() => handlePage(PAGE_PROFILE)}
          selected={selected === '/profile'}
          data-story={PAGE_PROFILE}
          text="Профиль">
          <img src={ProfileIcon} />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Navigation;
