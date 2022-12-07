import React, { useState } from 'react';
import { useRouter } from '@happysanta/router';
import {
  PAGE_HOME,
  router,
  MODAL_DISCIPLINE,
  MODAL_TOWNS,
  MODAL_INSTITUTE,
  POPOUT_CONFIRM,
} from '../../router';

import { Icon28ChevronBack } from '@vkontakte/icons';
import {
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  Panel,
  SimpleCell,
  Switch,
  DateRangeInput,
} from '@vkontakte/vkui';

import { addDays } from '@vkontakte/vkjs/lib/date';

import './CreateTask.css';

import { Navigation, FilterItem, InputItem } from '../../components';

import { useSelector, useDispatch } from 'react-redux';

import {
  setPrice,
  setDiscipline,
  setPhotoList,
} from '../../redux/slices/createTaskSlice';
import { useRef } from 'react';

const CreateTask = ({ id }) => {
  const router = useRouter();
  const [photoList, setPhotoList] = useState([
    {
      id: 1,
      picture: [],
    },
  ]);

  const [picture, setPicture] = useState([]);

  const onChangePicture = (e) => {
    console.log('picture', picture);
    setPicture([...picture, e.target.files[0]]);
  };

  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const createState = useSelector((state) => state.create);
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleClick = () => {
    const id = photoList.length + 1;
    setPhotoList((prev) => [
      ...prev,
      {
        id: id,
        photo: '',
      },
    ]);
  };

  //validate form

  const [error, setError] = useState({
    titleError: false,
    descrError: false,
    disciplineError: false,
    townError: false,
    instituteError: false,
    dateError: false,
    priceError: false,
  });

  const inputs = [
    {
      id: 1,
      name: 'title',
      errMsg: 'Обозначьте тематику',
    },
    {
      id: 2,
      name: 'descr',
      errMsg: 'Опишите задачу',
    },
    {
      id: 3,
      name: 'town',
      errMsg: 'Выберите предмет',
    },
    {
      id: 4,
      name: 'town',
      errMsg: 'Выберите город',
    },
    {
      id: 5,
      name: 'town',
      errMsg: 'Выберите ВУЗ',
    },
    {
      id: 6,
      name: 'date',
      errMsg: 'Укажите дату',
    },
    {
      id: 7,
      name: 'price',
      errMsg: 'Введите цену',
    },
  ];

  // calendar
  const [dateValue, setDateValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [closeOnChange, setCloseOnChange] = useState(true);

  // refs

  const titleRef = useRef();
  const descrRef = useRef();
  const disciplineRef = useRef();
  const townRef = useRef();
  const insituteRef = useRef();
  const priceRef = useRef();

  //textarea state

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  //submit button

  const handleSubmut = () => {
    if (
      title === '' &&
      descr === '' &&
      filterState.discipline === '' &&
      filterState.town === '' &&
      filterState.institute === ''
    ) {
      window.scrollTo(0, 0);
      setError({
        titleError: true,
        descrError: true,
        disciplineError: true,
        townError: true,
        instituteError: true,
        priceError: true,
      });
    } else if (title === '') {
      window.scrollTo(0, 0);
      setError({
        titleError: true,
      });
    } else if (descr === '') {
      titleRef.current.scrollIntoView();
      setError({
        descrError: true,
      });
    } else if (filterState.discipline === '') {
      disciplineRef.current.scrollIntoView();
      setError({
        disciplineError: true,
      });
    } else if (filterState.town === '') {
      townRef.current.scrollIntoView();
      setError({
        townError: true,
      });
    } else if (filterState.institute === '') {
      insituteRef.current.scrollIntoView();
      setError({
        instituteError: true,
      });
    } else if (dateValue === '') {
      titleRef.current.scrollIntoView();
      setError({
        dateError: true,
      });
    } else if (createState.price === '') {
      titleRef.current.scrollIntoView();
      setError({
        priceError: true,
      });
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton
            aria-label="кнопка"
            onClick={() => {
              router.pushPopup(POPOUT_CONFIRM);
            }}>
            <Icon28ChevronBack />
          </PanelHeaderButton>
        }
        before={<PanelHeaderBack />}>
        <div className="header-create">
          <h1 className="header-create__title">Создай свое объявление</h1>
        </div>
      </PanelHeader>
      <div className="create-container">
        <div className="create">
          <textarea
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Обозначь тематику, например: написать курсовую"
            rows="1"
            className={
              error.titleError
                ? 'create__input create__input--title error'
                : 'create__input create__input--title'
            }
            type="text"
          />
          {console.log(title)}
          {error.titleError && <span className="errorMsg">{inputs[0].errMsg}</span>}
          <textarea
            ref={descrRef}
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            placeholder="Опиши задачу, чем больше подробностей, тем лучше результат :)"
            rows="5"
            className={
              error.descrError
                ? 'create__input create__input--title error'
                : 'create__input create__input--title'
            }
            type="text"
          />
          {error.descrError && <span className="errorMsg">{inputs[1].errMsg}</span>}
          <div className="photoList">
            {photoList.map((photo, key) => (
              <input
                key={key}
                id={photo.id}
                onChange={(e) => onChangePicture(e)}
                className="custom-file-input"
                type="file"
                accept=".png, .jpg, .jpeg"
              />
            ))}
            <div onClick={() => handleClick()} className="addPhoto"></div>
          </div>
          <div className="create__filter">
            <h2 className="filter-modal__title">Предмет</h2>
            <div ref={disciplineRef} className={error.disciplineError ? 'error' : ''}>
              <FilterItem
                subTitle={filterState.discipline}
                setDiscipline={setDiscipline}
                subModal={MODAL_DISCIPLINE}
              />
            </div>
            {error.disciplineError && (
              <span className="errorMsg">{inputs[2].errMsg}</span>
            )}
            <h2 className="filter-modal__title">Город</h2>
            <div ref={townRef} className={error.townError ? 'error' : ''}>
              <FilterItem
                subTitle={filterState.town}
                setDiscipline={setDiscipline}
                subModal={MODAL_TOWNS}
              />
            </div>
            {error.townError && <span className="errorMsg">{inputs[3].errMsg}</span>}
            <h2 className="filter-modal__title">Учебное заведение</h2>
            <div ref={insituteRef} className={error.instituteError ? 'error' : ''}>
              <FilterItem
                subTitle={filterState.institute}
                setDiscipline={setDiscipline}
                subModal={MODAL_INSTITUTE}
              />
            </div>
            {error.instituteError && <span className="errorMsg">{inputs[4].errMsg}</span>}
            <h2 className="filter-modal__title">Сроки</h2>
            <div className="filter-modal__datepicker">
              <div className={error.dateError ? 'error-date' : ''}>
                <DateRangeInput
                  value={dateValue}
                  onChange={setDateValue}
                  disablePast={disablePast}
                  closeOnChange={closeOnChange}
                  disablePickers={disablePickers}
                />
              </div>
              {error.dateError && <span className="errorMsg">{inputs[5].errMsg}</span>}
            </div>
            <h2 className="filter-modal__title">Желаемый бюджет</h2>
            <div className={error.priceError ? 'error-price' : ''}>
              <InputItem
                price={createState.price}
                dispatch={dispatch}
                setPrice={setPrice}
                title={'Цена, ₽ '}
              />
            </div>
            {error.priceError && <span className="errorMsg">{inputs[6].errMsg}</span>}
            <div className="switch">
              <SimpleCell
                style={{ color: '#232036' }}
                Component="label"
                after={<Switch />}>
                Публиковать пост
              </SimpleCell>
            </div>
          </div>
          <div className="create__button">
            <button onClick={() => handleSubmut()} className="button">
              Опубликовать
            </button>
          </div>
        </div>
      </div>
      <Navigation />
    </Panel>
  );
};

export default CreateTask;
