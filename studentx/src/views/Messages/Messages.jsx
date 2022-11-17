import React from 'react';

import { View, Panel, PanelHeader, Group, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';
import Navigation from '../../components/Navigation';

import nullPhoto from './../../img/nullPhotoIcon.svg';

import './Messages.css';

const Messages = ({ id, page }) => {
  return (
    <Panel id={id}>
      <div className="wrapper messages-wrapper">
        <div className="messages-header">
          <h1 className="messages-header__title">Мои сообщения</h1>
          <div className="search-messages">
            <input type="text" placeholder="Поиск" className="search-messages__input" />
            <span className="search-messages__icon"></span>
          </div>
        </div>
        <div className="messages-container">
          <Navigation />
        </div>
        <div className="messages-content">
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
      </div>
    </Panel>
  );
};

export default Messages;
