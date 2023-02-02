import { Panel } from '@vkontakte/vkui';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import bridge from '@vkontakte/vk-bridge';
import { fetchTasksAPI } from '../../http/tasksApi';

const Dev = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetchTasksAPI().then((data) => {
    //   console.log(data)
    // })
    // axios.get(`https://635c0281fc2595be263e82f3.mockapi.io/tasks?id=${0}`)
    // .then((data) => {
    //   console.log(data)
    // })
    axios.get(`https://mtimofeev.fun/api/v2/tasks`)
    .then((data) => {
      setData(data.data)
    })

  }, []);

  return (
    <Panel id={'dev'}>
      <div>
        {data.map((obj) => (
          <div>{obj.id}</div>
        ))}
      </div>
    </Panel>
  );
};

export default Dev;
