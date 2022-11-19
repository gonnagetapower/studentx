import React from 'react';

import { Panel, Group } from '@vkontakte/vkui';
import { Navigation } from '../../components';

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
