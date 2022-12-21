import { useState, useEffect } from 'react';
import { useRouter } from '@happysanta/router';
import { Navigation, TaskPhoto } from '../../components';
import { FilterItem } from '../../components';
import { MODAL_DISCIPLINE, MODAL_INSTITUTE, POPOUT_CONFIRM } from '../../router';
import { useSelector, useDispatch } from 'react-redux';

import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderBack,
  DateInput,
  SimpleCell,
  Switch,
} from '@vkontakte/vkui';
import { Icon28ChevronBack } from '@vkontakte/icons';

import { validate } from '../../utils/validate';

import { setFormValues } from '../../redux/slices/createTaskSlice';

import './CreateTask.css';

const CreateTask = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const formValues = useSelector((state) => state.create);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ ...formValues, [name]: value }));
  };

  const handleSubmit = () => {
    setFormErrors(
      validate(
        formValues,
        filterState.discipline,
        filterState.institute,
        dateFrom,
        dateTo,
      ),
    );
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(
        formValues,
        dateFrom,
        dateTo,
        filterState.discipline,
        filterState.institute,
        photoList,
      );
    }
    console.log(formErrors);
  }, [formErrors]);

  //dateInput
  const [dateFrom, setDateFrom] = useState(undefined);
  const [disablePast, setDisablePast] = useState(false);
  const [closeOnChange, setCloseOnChange] = useState(true);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);

  const [dateTo, setDateTo] = useState(undefined);
  const [disablePastTo, setDisablePastTo] = useState(true);

  //photoList

  const [photoList, setPhotoList] = useState([]);

  const handlePhoto = (e) => {
    let newPhotoList = [];
    const [file] = e.target.files;
    newPhotoList.push({
      url: URL.createObjectURL(file),
    });
    setPhotoList([...photoList, ...newPhotoList]);
  };

  const deletePhoto = (elem) => {
    const newPhotoList = photoList.filter((photo) => {
      return photo !== elem;
    });
    setPhotoList(newPhotoList);
  };

  return (
    <Panel id={'dev'}>
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
            type="text"
            name="title"
            placeholder="Обозначь тематику, например: написать курсовую"
            value={formValues.title}
            onChange={(e) => handleChange(e)}
            onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
            onBlur={
              formValues.title === ''
                ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
                : ''
            }
            className={
              formErrors.title
                ? 'create__input create__input--title error'
                : 'create__input create__input--title'
            }
          />
          {formErrors.title && <span className="errorMsg">{formErrors.title}</span>}
          <textarea
            type="text"
            name="descr"
            placeholder="Опиши задачу, чем больше подробностей, тем лучше результат :)"
            value={formValues.descr}
            onChange={handleChange}
            onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
            onBlur={
              formValues.title === ''
                ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
                : ''
            }
            className={
              formErrors.descr
                ? 'create__input create__input--descr error'
                : 'create__input create__input--descr'
            }
          />
          {formErrors.descr && <span className="errorMsg">{formErrors.descr}</span>}
          <div className="photoList">
            <div>{photoList.length >= 1 || <div className="addPhoto"></div>}</div>
            {photoList.map((photo, index) => (
              <TaskPhoto photo={photo} key={index} deletePhoto={deletePhoto} />
            ))}
            {photoList.length <= 4 && (
              <input
                onChange={(e) => handlePhoto(e)}
                className="custom-file-input"
                type="file"
              />
            )}
          </div>
          <div className="create__filter">
            <h2 className="filter-modal__title">Предмет</h2>
            <div
              onClick={() => setFormErrors({ ...formErrors, discipline: false })}
              className={formErrors.discipline ? 'error' : ''}>
              <FilterItem subTitle={filterState.discipline} subModal={MODAL_DISCIPLINE} />
            </div>
            {formErrors.discipline && (
              <span className="errorMsg">{formErrors.discipline}</span>
            )}
            <h2 className="filter-modal__title">Учебное заведение</h2>
            <div
              onClick={() => setFormErrors({ ...formErrors, institute: false })}
              className={formErrors.institute ? 'error' : ''}>
              <FilterItem subTitle={filterState.institute} subModal={MODAL_INSTITUTE} />
            </div>
            {formErrors.institute && (
              <span className="errorMsg">{formErrors.institute}</span>
            )}
            <h2 className="filter-modal__title">Сроки</h2>
            <h3 className="create-task__time">С</h3>
            <div
              onClick={() => setFormErrors({ ...formErrors, dateFrom: false })}
              className={formErrors.dateFrom ? 'error-date' : ''}>
              <DateInput
                value={dateFrom}
                onChange={setDateFrom}
                disablePast={disablePast}
                closeOnChange={closeOnChange}
                showNeighboringMonth={showNeighboringMonth}
              />
            </div>
            {formErrors.dateFrom && (
              <span className="errorMsg">{formErrors.dateFrom}</span>
            )}
            <h3 className="create-task__time">До</h3>
            <div
              onClick={() => setFormErrors({ ...formErrors, dateTo: false })}
              className={formErrors.dateTo ? 'error-date' : ''}>
              <DateInput
                value={dateTo}
                onChange={setDateTo}
                disablePast={disablePastTo}
                closeOnChange={closeOnChange}
                showNeighboringMonth={showNeighboringMonth}
              />
            </div>
            {formErrors.dateTo && <span className="errorMsg">{formErrors.dateTo}</span>}
            <input
              type="text"
              name="price"
              placeholder="Укажите цену"
              value={formValues.price}
              onChange={handleChange}
              onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
              onBlur={
                formValues.price === ''
                  ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
                  : ''
              }
              className={
                formErrors.price
                  ? 'create__input create__input--price error'
                  : 'create__input create__input--price'
              }
            />
            {formErrors.price && <span className="errorMsg">{formErrors.price}</span>}
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
            <button onClick={() => handleSubmit()} className="button">
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
