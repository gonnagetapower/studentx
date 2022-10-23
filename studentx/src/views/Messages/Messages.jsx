import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';

const Messages = ({ id, activePanel }) => {
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
        <Group style={{ height: '1000px' }}>
          <h1>MessagesPage</h1>
        </Group>
      </Panel>
    </View>
  );
};

export default Messages;
