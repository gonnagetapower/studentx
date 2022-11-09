import React from 'react';

import './ListItem.css';

const ListItem = ({ img, title, descr }) => {
  return (
    <div className="list-item">
      <img className="list-item__icon" src={img} alt="pay icon" />
      <div className="text">
        <p className="text__title">{title}</p>
        <p className="text__title">{descr}</p>
      </div>
      <div className="arrow-right"></div>
    </div>
  );
};

export default ListItem;
