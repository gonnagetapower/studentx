import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLastWatch } from '../../redux/slices/appSlice';
import { PAGE_PUBLICATIONS, PAGE_RESPOND, router } from '../../router';

import './Task.css';

const Task = ({ title, descr, dateOrder, price, id }) => {
  const watchedPost = useSelector((state) => state.app.lastWatch);
  const dispatch = useDispatch();

  const handleTask = (id) => {
    dispatch(setLastWatch(id));
    router.pushPage(PAGE_RESPOND, { id: id });
  };

  return (
    <div className="content-item">
      <h1 className="content-item__title">{title}</h1>
      <p className="content-item__descr">{descr}</p>
      <div className="content-info">
        <p className="content-info__date">{dateOrder}</p>
        <p className="content-info__price">от {1000} </p>
        <button onClick={() => handleTask(id)} className="content-info__button">
          Откликнуться
        </button>
      </div>
    </div>
  );
};

export default Task;
