import React, { useState } from 'react';

import { ReactComponent as MainIcon } from './../../img/NavigationIcons/homeIcon.svg';
import { ReactComponent as PublicationIcon } from './../../img/NavigationIcons/publicationIcon.svg';
import { ReactComponent as ProfileIcon } from './../../img/NavigationIcons/profileIcon.svg';
import { ReactComponent as MsgIcon } from './../../img/NavigationIcons/msgIcon.svg';

import { Tabbar, TabbarItem } from '@vkontakte/vkui';

import { PAGE_MESSAGES, PAGE_PROFILE, PAGE_PUBLICATION, PAGE_HOME } from './../../router';

import { useRouter } from '@happysanta/router';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIcon } from '../../redux/slices/navSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const activeIcon = useSelector((state) => state.nav.activeIcon);
  const router = useRouter();

  const handlePage = (page, title) => {
    dispatch(setActiveIcon(title));
    router.pushPage(page);
  };

  return (
    <div>
      <Tabbar>
        <TabbarItem
          style={activeIcon === 'main' ? { color: '#8E95C7' } : { color: '#AEAEAE' }}
          onClick={() => handlePage(PAGE_HOME, 'main')}
          data-story="main"
          text="Главная">
          <MainIcon stroke={activeIcon === 'main' ? '#8E95C7' : '#AEAEAE'} />
        </TabbarItem>
        <TabbarItem
          style={activeIcon === 'publication' ? { color: '#8E95C7' } : { color: '#AEAEAE' }}
          onClick={() => handlePage(PAGE_PUBLICATION, 'publication')}
          data-story="publication"
          text="Мои публикации">
          <PublicationIcon stroke={activeIcon === 'publication' ? '#8E95C7' : '#AEAEAE'} />
        </TabbarItem>
        <TabbarItem
          style={activeIcon === 'messages' ? { color: '#8E95C7' } : { color: '#AEAEAE' }}
          onClick={() => handlePage(PAGE_MESSAGES, 'messages')}
          data-story="messages"
          text="Сообщения">
          <MsgIcon fill={activeIcon === 'messages' ? '#8E95C7' : '#AEAEAE'} />
        </TabbarItem>
        <TabbarItem
          style={activeIcon === 'profile' ? { color: '#8E95C7' } : { color: '#AEAEAE' }}
          onClick={() => handlePage(PAGE_PROFILE, 'profile')}
          data-story={'profile'}
          text="Профиль">
          <ProfileIcon fill={activeIcon === 'profile' ? '#8E95C7' : '#AEAEAE'} />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Navigation;
