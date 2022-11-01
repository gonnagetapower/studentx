import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';
import Navigation from '../../components/Navigation';

const Profile = ({ id, activePanel }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
      <Group style={{ height: '1000px' }}>
        <h1>ProfilePage</h1>
      </Group>
      <Navigation />
    </Panel>
  );
};

export default Profile;
