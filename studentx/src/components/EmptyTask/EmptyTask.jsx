import React from 'react';

import './EmptyTask.css';

const EmptyTask = () => {
  return (
    <div className="empty-task">
      <h1>Пусто</h1>
      <p className="empty-task__descr">
        К сожалению по вашему запросу не существует заданий
      </p>
    </div>
  );
};

export default EmptyTask;
