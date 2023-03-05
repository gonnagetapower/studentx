import React, { useState } from 'react';

import { Panel } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';

import bellIcon from './../../img/bellIcon.svg';
import filterIcon from './../../img/filterIcon.svg';

import { Navigation, Header, SwitchButton } from '../../components/';
import { MODAL_FILTER, PAGE_NOTICE } from '../../router';

import Home from './components/Home/Home';
import Publication from './components/Publication/Publication';

import './Main.css';
import { useDispatch, useSelector } from 'react-redux';

import closeIcon from './../../img/closeIcon.svg'
import { setDiscipline, setInstitute } from '../../redux/slices/filterSlice';

const Main = ({ id }) => {
  const [buttonActive, setButtonActive] = useState('2');
  const router = useRouter();

  const [snackBar, setSnackBar] = useState(null);

  const onClickButton = (e) => {
    setButtonActive(e.target.id);
  };

  const [filterValue, setFilterValue] = useState('');

  const university = useSelector((state) => state.filter.institute)
  const discipline = useSelector((state) => state.filter.discipline)
  const dispatch = useDispatch()

  const removeUniversity = () => {
    dispatch(setInstitute(''))
  }
  const removeDiscipline = () => {
    dispatch(setDiscipline(''))
  }


  return (
    <Panel id={id}>
      <Header>
        <div className="wrapper">
          <div className="search-container">
            <SwitchButton
              onClickButton={onClickButton}
              buttonActive={buttonActive}
              firtTitle={'Главная'}
              secondTitle={'Публикации'} />
            <div className="search">
              <input
                type="text"
                placeholder="Поиск"
                className="search__input"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <img
                onClick={() => router.pushPage(PAGE_NOTICE)}
                src={bellIcon}
                alt="search"
                className="search__info-bell"
              />
            </div>
            <div className={buttonActive === '1' ? 'filter--hidden' : 'filter'}>
              <img
                onClick={() => router.pushModal(MODAL_FILTER)}
                className="filter__icon"
                src={filterIcon}
                alt="filter"
              />
              <h2
                onClick={() => router.pushModal(MODAL_FILTER)}
                className="filter__title">
                Фильтры
              </h2>
              {university ?
                (<div className='filter__item'>
                  Институт
                  <img src={closeIcon} onClick={() => removeUniversity()} />
                </div>) : (null)}
              {discipline ?
                (<div className='filter__item'>Предмет
                  <img src={closeIcon} onClick={() => removeDiscipline()} />
                </div>) : (null)}
            </div>
          </div>
        </div>
      </Header>
      {buttonActive === '1' ? (
        <Home />
      ) : (
        <Publication
          filterValue={filterValue}
          setSnackBar={setSnackBar}
          snackBar={snackBar}
        />
      )}
      {snackBar}
      <Navigation />
    </Panel>
  );
};

// [...new Array(6)].map((index) => <SkeletonCard key={index} />

export default Main;
