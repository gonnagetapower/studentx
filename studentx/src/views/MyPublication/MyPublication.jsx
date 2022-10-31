import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';
import { PANEL_PUBLICATIONS } from '../../router';
import { useParams } from '@happysanta/router';

const MyPublication = (props) => {
  const { id } = useParams();
  return (
    <Panel id={props.id}>
      <PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
      <Group style={{ height: '1000px' }}>
        <h1>{id}</h1>
        {console.log({ id })}
        <h2>pampam</h2>
      </Group>
    </Panel>
  );
};

export default MyPublication;
