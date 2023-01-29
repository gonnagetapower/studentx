import React from 'react';
import { PAGE_PUBLICATIONS, PAGE_RESPOND, router } from '../../router';

import './Task.css';

const Task = ({ title, descr, dateOrder, price, id, go, ROUTES }) => {
  return (
    <div className="content-item">
      <h1 className="content-item__title">{title}</h1>
      <p className="content-item__descr">{descr}</p>
      <div className="content-info">
        <p className="content-info__date">{dateOrder}</p>
        <p className="content-info__price">от {price} </p>
        <button
          onClick={() => router.pushPage(PAGE_RESPOND, { id: id})}
          className="content-info__button">
          Откликнуться
        </button>
      </div>
    </div>
  );
};

export default Task;
