import React from 'react';
import nullPhoto from './../../img/nullPhotoIcon.svg';

import './Person.css';

const Person = ({ name, descr, status }) => {
  return (
    <div className="person">
      <img className="person__icon" src={nullPhoto} alt="" />
      <div className="person-info">
        <h1 className="person-info__name">{name}</h1>
        <p className="person-info__descr">{descr}</p>
        <p className="person-info__status">{status}</p>
      </div>
    </div>
  );
};

export default Person;
