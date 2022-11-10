import { ModalPage } from '@vkontakte/vkui';
import React from 'react';
import { router } from '../../router';

const Discipline = ({ id, discipline, setDiscipline }) => {
  const handleDiscipline = (dis) => {
    setDiscipline(dis);
    router.popPage();
  };

  return (
    <div>
      <ModalPage id={id} settlingHeight={100}>
        <h1>discipline</h1>
        <h1 onClick={() => handleDiscipline('1')}>1</h1>
        <h1 onClick={() => handleDiscipline('2')}>2</h1>
        <h1 onClick={() => handleDiscipline('3')}>3</h1>
        <h1 onClick={() => handleDiscipline('4')}>4</h1>
        <h1 onClick={() => handleDiscipline('5')}>5</h1>
        <h1 onClick={() => handleDiscipline('6')}>6</h1>
        <h1 onClick={() => handleDiscipline('7')}>7</h1>
        <h1 onClick={() => handleDiscipline('8')}>8</h1>
        <h1 onClick={() => handleDiscipline('9')}>9</h1>
        <h1 onClick={() => handleDiscipline('10')}>10</h1>
        <h1 onClick={() => handleDiscipline('11')}>11</h1>
        <h1 onClick={() => handleDiscipline('12')}>12</h1>
        <h1 onClick={() => handleDiscipline('13')}>13</h1>
        <h1 onClick={() => handleDiscipline('14')}>14</h1>
      </ModalPage>
    </div>
  );
};

export default Discipline;
