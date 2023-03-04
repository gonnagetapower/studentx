import React from 'react';
import nullImg from './../../img/nullImg.svg';

import './TaskPhoto.css';

const TaskPhoto = ({ photo, deletePhoto }) => {
  return (
    <div className="taskPhotoBlock">
      {console.log(photo)}
      <img className="taskPhoto" src={photo.url === '' ? nullImg : photo.url} />
      <span onClick={() => deletePhoto(photo)} className="exitTaskPhoto"></span>
    </div>
  );
};

export default TaskPhoto;
