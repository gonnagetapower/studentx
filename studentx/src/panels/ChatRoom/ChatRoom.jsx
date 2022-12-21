import React from 'react';
import { FixedLayout, Panel } from '@vkontakte/vkui';
import { Header, Navigation, Person } from '../../components';

import { useRouter } from '@happysanta/router';

import dots from './../../img/3dots.svg';

import './ChatRoom.css';

const ChatRoom = ({ id }) => {
  const router = useRouter();
  return (
    <Panel id={id}>
      <Header fixed={true}>
        <div className="chatRoom__header">
          <div onClick={() => router.popPage()} className="arrow-left"></div>
          <Person colorText={'white'} name={'Наташа Ростова'} descr={''} status={'Online'} />
          <img className="chatRoom__dots" src={dots} alt="" />
        </div>
      </Header>
      <div className="chatRoom">
        <div className="chatRoom-messages">
          <div className="first-msg">
            <p className="msg-date">28 мая</p>
            <div className="first-msg__content">
              <div className="msg-response">
                <p className="msg-response__title">Отклик на ваше объявление</p>
                <p className="msg-response__date">19:05</p>
                <div className="response-task">
                  <h1 className="response-task__title">Решить метрологию </h1>
                  <p className="response-task__descr">
                    Нужно решить метрологию блин ничего не понимаю вообще помогите пожалуйста иначе
                    я выпилюсь нахрен оч тяжко жить
                  </p>
                  <p className="response-task__date">23 сентября, 09:32</p>
                </div>
              </div>
            </div>
            <div className="msg msg--left">
              <h2 className="msg__content">
                Здравствуйте, готова помочь вам с решением метрологии
              </h2>
              <p className="msg-response__date">19:05</p>
            </div>
            <p className="msg-date">29 мая</p>
            <div className="msg msg--right">
              <h2 className="msg__content">Здорово, давайте приступим</h2>
              <p className="msg-response__date msg-response__date--right">19:05</p>
            </div>
            <div className="msg msg--left">
              <h2 className="msg__content">
                Здравствуйте, готова помочь вам с решением метрологии
              </h2>
              <p className="msg-response__date">19:05</p>
            </div>
            <div className="msg msg--left">
              <h2 className="msg__content">
                Здравствуйте, готова помочь вам с решением метрологии
              </h2>
              <p className="msg-response__date">19:05</p>
            </div>
            <div className="msg msg--left">
              <h2 className="msg__content">
                Здравствуйте, готова помочь вам с решением метрологии
              </h2>
              <p className="msg-response__date">19:05</p>
            </div>
            <div className="msg msg--left">
              <h2 className="msg__content">
                Здравствуйте, готова помочь вам с решением метрологии
              </h2>
              <p className="msg-response__date">19:05</p>
            </div>
            <div className="msg msg--right">
              <h2 className="msg__content">Здорово, давайте приступим</h2>
              <p className="msg-response__date msg-response__date--right">19:05</p>
            </div>
          </div>
        </div>
      </div>
      <FixedLayout filled vertical="bottom">
        <div className="enterMsg">
          <span className="enterMsg__icon enterMsg__icon--left"></span>
          <input className="enterMsg__input" placeholder="Введите текст сообщения" type="text" />
          <span className="enterMsg__icon enterMsg__icon--right"></span>
        </div>
      </FixedLayout>
    </Panel>
  );
};

export default ChatRoom;
