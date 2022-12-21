import { Div, PanelHeader, usePlatform } from '@vkontakte/vkui';
import React from 'react';

import './Header.css';

const Header = (props) => {
  const platform = usePlatform();
  return (
    <div className={props.fixed === true ? 'fixed' : ''}>
      <div
        className={
          platform === 'ios' ? 'header-wrapper header-wrapper--ios' : 'header-wrapper'
        }>
        <div className="header">{props.children}</div>
      </div>
    </div>
  );
};

export default Header;
