import React from 'react';
import nullPhoto from './../../img/cameraIcon.svg';

import './TaskPhoto.css';

const TaskPhoto = ({ photo, deletePhoto }) => {
  return (
    <div className="taskPhotoBlock">
      <img className="taskPhoto" src={photo.url === '' ? nullPhoto : photo.url} />
      <span onClick={() => deletePhoto(photo)} className="exitTaskPhoto"></span>
    </div>
  );
};

export default TaskPhoto;
