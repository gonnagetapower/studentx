import { Panel } from '@vkontakte/vkui';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Task } from './../../components/';

import bridge from '@vkontakte/vk-bridge';
import { fetchTasksAPI } from '../../http/tasksApi';
import { useSelector } from 'react-redux';
import { Navigation } from '../../components';

const Dev = () => {
  const [watch, setWatch] = useState([]);

  const responce = [];

  const lastWatchedId = useSelector((state) => state.app.lastWatch);

  console.log(lastWatchedId);

  useEffect(() => {
    for (let i = 0; i < lastWatchedId.length; i++) {
      axios.get(`https://mtimofeev.fun/api/v2/tasks/${lastWatchedId[i]}`).then((data) => {
        responce.push(data.data);
        // setWatch([...watch, data.data]);
        setWatch(responce);
      });
    }
  }, []);

  if (!watch) {
    return 'Загрузка';
  }

  return (
    <Panel id={'dev'}>
      <div>
        {watch.map((watch) => (
          <Task
            key={watch.id}
            title={watch.title}
            descr={watch.description}
            dateOrder={watch.deliveryDate}
            id={watch.id}
          />
        ))}
      </div>
      <Navigation />
    </Panel>
  );
};

export default Dev;
