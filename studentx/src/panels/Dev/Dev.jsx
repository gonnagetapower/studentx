import { Panel } from '@vkontakte/vkui';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dev = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://mtimofeev.fun/api/v2/tasks').then((respronse) => {
      setData(respronse);
      console.log(respronse);
    });
    console.log(data);
  }, []);

  return (
    <Panel id={'dev'}>
      <div>
        <h2>dev</h2>
      </div>
    </Panel>
  );
};

export default Dev;
