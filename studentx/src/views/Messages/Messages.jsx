import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';
import Navigation from '../../components/Navigation';

const Messages = ({ id, page }) => {
  return (
    <Panel id={id}>
      <Group style={{ height: '1000px' }}>
        <h1>MessagesPage</h1>
      </Group>
      <Navigation />
    </Panel>
  );
};

export default Messages;
