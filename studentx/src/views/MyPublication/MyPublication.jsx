import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';
import Navigation from '../../components/Navigation';

const MyPublication = ({ id }) => {
  return (
    <Panel id={id}>
      <Group style={{ height: '1000px' }}>
        <h1>Publications Page</h1>
      </Group>
      <Navigation />
    </Panel>
  );
};

export default MyPublication;
