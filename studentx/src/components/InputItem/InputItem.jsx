import React from 'react';

import './InputItem.css';

const InputItem = ({ title }) => {
  return (
    <div className="inputItem-container">
      <div className="inputItem">
        <h1 className="inputItem__title">{title}</h1>
      </div>
    </div>
  );
};

export default InputItem;
