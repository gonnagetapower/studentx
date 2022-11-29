import { PanelHeader } from '@vkontakte/vkui';
import React from 'react';

import './Header.css';

const Header = (props) => {
  return (
    <div>
      <PanelHeader separator={false}>
        <div className="header">{props.children}</div>
      </PanelHeader>
    </div>
  );
};

export default Header;
