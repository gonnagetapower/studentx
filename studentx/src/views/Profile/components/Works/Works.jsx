import React from 'react';

import starIcon from './../../../../img/starIcon.svg';
import blankIcon from './../../../../img/blankIcon.svg';

const Works = () => {
  return (
    <div>
      <div className="saved-tasks">
        <img className="saved-tasks__img saved-tasks__img--star" src={starIcon} alt="saved tasks" />
        <h2 className="saved-tasks__title">Сохраненные</h2>
      </div>
      <div className="saved-tasks">
        <img
          className="saved-tasks__img saved-tasks__img--blank"
          src={blankIcon}
          alt="completed tasks"
        />
        <h2 className="saved-tasks__title">Выполненные</h2>
      </div>
    </div>
  );
};

export default Works;
