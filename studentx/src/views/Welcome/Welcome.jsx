import { Panel } from '@vkontakte/vkui';
import React from 'react';

import WelcomeIcon from './../../img/Welcome.svg';

import './Welcome.css';

const Welcome = ({ id }) => {
  return (
    <Panel id={id}>
      <div className="welcome">
        <img className="welcome__icon" src={WelcomeIcon} alt="" />
      </div>
    </Panel>
  );
};

export default Welcome;
