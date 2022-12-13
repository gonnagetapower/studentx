import React from 'react';
import { useState } from 'react';

import nullPhoto from './../../img/cameraIcon.svg';

import { Navigation, Task } from '../../components';

import './Dev.css';

const Dev = () => {
  const [photoList, setPhotoList] = useState([]);

  const handlePhoto = (e) => {
    let newArray = [];
    const [file] = e.target.files;
    newArray.push({
      url: URL.createObjectURL(file),
    });
    setPhotoList([...photoList, ...newArray]);
    console.log('img', photoList);
    console.log('array', newArray);
  };

  // URL.createObjectURL(file)

  return (
    <div>
      <h1>dev</h1>
      <div className="dev-photo-block">
        <div>{photoList.length >= 1 || <img src={nullPhoto} />}</div>
        {photoList.map((photo, key) => (
          <img
            key={key}
            id={photo.id}
            className="dev-photo"
            src={photo.url === '' ? nullPhoto : photo.url}
          />
        ))}
        <input
          onChange={(e) => handlePhoto(e)}
          className="custom-file-input"
          type="file"
          accept=".png, .jpg, .jpeg"
        />
      </div>
      <Navigation />
    </div>
  );
};

export default Dev;
