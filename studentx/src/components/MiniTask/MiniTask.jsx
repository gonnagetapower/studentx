import React from 'react';

import './MiniTask.css';

const MiniTask = ({ title, descr }) => {
  return (
    <div className="mini-task">
      <h1 className="mini-task__title">{title}</h1>
      <p className="mini-task__descr">{descr}</p>
    </div>
  );
};

export default MiniTask;
