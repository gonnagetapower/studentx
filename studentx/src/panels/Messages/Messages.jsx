import React from 'react';

import { Panel } from '@vkontakte/vkui';
import { Header, Navigation } from '../../components';
import { useRouter } from '@happysanta/router';

import nullPhoto from './../../img/nullPhotoIcon.svg';

import { PAGE_CHATROOM } from '../../router';

import './Messages.css';

const Messages = ({ id }) => {
  const router = useRouter();
  return (
    <Panel id={id}>
      <Header>
        <h1 className="messages-header__title">Мои сообщения</h1>
        <div className="search-messages">
          <input type="text" placeholder="Поиск" className="search-messages__input" />
          <span className="search-messages__icon"></span>
        </div>
      </Header>
      <div className="messages-container">
        <Navigation />
      </div>
      <div className="messages-content">
        <div onClick={() => router.pushPage(PAGE_CHATROOM)} className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
        <div className="messages">
          <img className="messages__icon" src={nullPhoto} alt="" />
          <div className="person-message">
            <h1 className="person-message__name">Наташа Ростова</h1>
            <p className="person-message__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus, iusto
              ullam culpa voluptatum expedita unde, accusamus, molestiae ratione magnam obcaecati
              sit labore nesciunt qui commodi possimus quia laudantium. A!
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Messages;
