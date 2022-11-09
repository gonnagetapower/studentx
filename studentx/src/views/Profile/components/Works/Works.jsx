import React from 'react';

import starIcon from './../../../../img/starIcon.svg';
import blankIcon from './../../../../img/blankIcon.svg';
import ListItem from '../../../../components/ListItem/ListItem';

const Works = () => {
  return (
    <div>
      <ListItem img={starIcon} title={'Сохраненные'} />
      <ListItem img={blankIcon} title={'Выполненные'} />
    </div>
  );
};

export default Works;
