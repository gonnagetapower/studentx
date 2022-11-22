import React from 'react';

import './InputItem.css';

const InputItem = ({ title, setPrice, price, dispatch }) => {
  return (
    <div className="inputItem-container">
      <input
        value={price}
        onChange={(e) => dispatch(setPrice(e.target.value))}
        className="inputItem"
        placeholder={title}
        type="text"
      />
    </div>
  );
};

export default InputItem;
