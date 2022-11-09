import { ModalPage } from '@vkontakte/vkui';
import React from 'react';

const Filter = ({ id }) => {
  return (
    <ModalPage id={id} settlingHeight={10}>
      <h1>Filter</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias, non, maiores
        perferendis placeat laborum necessitatibus minima corrupti reprehenderit quae expedita
        cupiditate, dolorem eius inventore ipsa eaque quidem repudiandae mollitia?
      </p>
    </ModalPage>
  );
};

export default Filter;
