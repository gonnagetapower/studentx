import React from 'react';

import { Panel, Group } from '@vkontakte/vkui';
import { Navigation, Person, Task } from '../../components';
import { useRouter } from '@happysanta/router';

import './MyPublication.css';

const MyPublication = ({ id }) => {
  const router = useRouter();
  return (
    <Panel id={id}>
      <div className="publication__header">
        <div onClick={() => router.popPage()} className="arrow-left"></div>
        <h1 className="publication__title">Мои публикации</h1>
      </div>
      <div className="publication__container">
        <Task
          title={' Решить метрологию '}
          descr={
            'Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я выпилюсь нахрен оч тяжко жить '
          }
          dateOrder={'23 сентября, 09:32'}
          price={'1.000 '}
        />
        <Task
          title={' Решить метрологию '}
          descr={
            'Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я выпилюсь нахрен оч тяжко жить '
          }
          dateOrder={'23 сентября, 09:32'}
          price={'1.000 '}
        />
        <Task
          title={' Решить метрологию '}
          descr={
            'Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе я выпилюсь нахрен оч тяжко жить '
          }
          dateOrder={'23 сентября, 09:32'}
          price={'1.000 '}
        />
      </div>
      <Navigation />
    </Panel>
  );
};

export default MyPublication;
