import React from 'react';
import nullPhoto from './../../img/nullPhotoIcon.svg';

import './Person.css';

const Person = ({ name, descr, status, colorText }) => {
  return (
    <div className="person">
      <img className="person__icon" src={nullPhoto} alt="" />
      <div className="person-info">
        <h1
          style={colorText === 'white' ? { color: '#fff' } : { color: '#232036' }}
          className="person-info__name">
          {name}
        </h1>
        <p
          style={colorText === 'white' ? { color: '#fff' } : { color: '#232036' }}
          className="person-info__descr">
          {descr}
        </p>
        <p
          style={colorText === 'white' ? { color: '#fff' } : { color: '#232036' }}
          className="person-info__status">
          {status}
        </p>
      </div>
    </div>
  );
};

export default Person;
