import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';

const MyPublication = ({ id, activePanel }) => {
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
        <Group style={{ height: '1000px' }}>
          <h1>PublicationPage</h1>
        </Group>
      </Panel>
    </View>
  );
};

export default MyPublication;
