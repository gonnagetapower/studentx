// import React, { useState } from 'react';

// import { Navigation, Task, TaskPhoto } from '../../components';

// import './Dev.css';

// const Dev = () => {
//   const [field, setField] = useState({
//     title: '',
//     descr: '',
//     discipline: '',
//     insitute: '',
//     dateFrom: '',
//     dateTo: '',
//     price: '',
//     formErrors: {
//       title: '',
//       descr: '',
//       discipline: '',
//       insitute: '',
//       dateFrom: '',
//       dateTo: '',
//       price: '',
//     },
//     titleValid: false,
//     descrValid: false,
//   });

//   const validateField = (fieldName, value) => {
//     let fieldValidationErrors = field.formErrors;
//     switch (fieldName) {
//       case 'title':
//         titleNull = value === '';
//         titleValid = value.length >= 6;
//         fieldValidationErrors.title = titleNull ? '' : 'Напишите название';
//         fieldValidationErrors.title = titleValid ? '' : 'Слишком короткое название';
//     }
//     setField({
//       formErrors: fieldValidationErrors,
//       titleValid: titleValid,
//     });
//   };

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setField({ [name]: value }, () => validateField(name, value));
//   };

//   return (
//     <div>
//       <input placeholder="title" value={field.title} onChange={handleInput} />
//       <Navigation />
//     </div>
//   );
// };

// export default Dev;

// import { useState, useEffect } from 'react';
// import { useRouter } from '@happysanta/router';
// import { Navigation, TaskPhoto, InputItem } from '../../components';
// import { FilterItem } from '../../components';
// import { MODAL_DISCIPLINE, MODAL_INSTITUTE, POPOUT_CONFIRM } from '../../router';
// import { useSelector } from 'react-redux';
// import {
//   setPrice,
//   setDiscipline,
//   setPhotoList,
// } from '../../redux/slices/createTaskSlice';

// import {
//   Panel,
//   PanelHeader,
//   PanelHeaderButton,
//   PanelHeaderBack,
//   DateInput,
//   SimpleCell,
//   Switch,
// } from '@vkontakte/vkui';
// import { Icon28ChevronBack } from '@vkontakte/icons';
// import { format } from '@vkontakte/vkjs/lib/date';
// import { LocaleProviderContext } from '@vkontakte/vkui';

// function Dev() {
//   const router = useRouter();
//   const initialValues = {
//     title: '',
//     descr: '',
//     discipline: '',
//     institute: '',
//     price: '',
//   };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const filterState = useSelector((state) => state.filter);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = () => {
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues, dateFrom, dateTo);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     if (!values.title) {
//       errors.title = 'Введите название';
//     }
//     if (!values.descr) {
//       errors.descr = 'Введите описание';
//     } else if (values.descr.length <= 6) {
//       errors.descr = 'Слишком короткое описание';
//     }
//     if (!filterState.discipline) {
//       errors.discipline = 'Выберите предмет';
//     }
//     if (!filterState.institute) {
//       errors.institute = 'Выберите ВУЗ';
//     }
//     if (!dateFrom) {
//       errors.dateFrom = 'Укажите дату';
//     }
//     if (!dateTo) {
//       errors.dateTo = 'Укажите дату';
//     }
//     if (!values.price) {
//       errors.price = 'Укажите цену';
//     }
//     return errors;
//   };

//   //dateInput
//   const [dateFrom, setDateFrom] = useState(undefined);
//   const [disablePast, setDisablePast] = useState(false);
//   const [closeOnChange, setCloseOnChange] = useState(true);
//   const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);

//   const [dateTo, setDateTo] = useState(undefined);

//   //photoList

//   const [photoList, setPhotoList] = useState([]);

//   const handlePhoto = (e) => {
//     let newPhotoList = [];
//     const [file] = e.target.files;
//     newPhotoList.push({
//       url: URL.createObjectURL(file),
//     });
//     setPhotoList([...photoList, ...newPhotoList]);
//   };

//   const deletePhoto = (elem) => {
//     const newPhotoList = photoList.filter((photo) => {
//       return photo !== elem;
//     });
//     setPhotoList(newPhotoList);
//   };

//   return (
//     <Panel id={'dev'}>
//       <PanelHeader
//         left={
//           <PanelHeaderButton
//             aria-label="кнопка"
//             onClick={() => {
//               router.pushPopup(POPOUT_CONFIRM);
//             }}>
//             <Icon28ChevronBack />
//           </PanelHeaderButton>
//         }
//         before={<PanelHeaderBack />}>
//         <div className="header-create">
//           <h1 className="header-create__title">Создай свое объявление</h1>
//         </div>
//       </PanelHeader>
//       <div className="create-container">
//         <div className="create">
//           <textarea
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={formValues.title}
//             onChange={handleChange}
//             onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
//             onBlur={
//               formValues.title === ''
//                 ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
//                 : ''
//             }
//             className={
//               formErrors.title
//                 ? 'create__input create__input--title error'
//                 : 'create__input create__input--title'
//             }
//           />
//           {formErrors.title && <span className="errorMsg">{formErrors.title}</span>}
//           <textarea
//             type="text"
//             name="descr"
//             placeholder="descr"
//             value={formValues.descr}
//             onChange={handleChange}
//             onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
//             onBlur={
//               formValues.title === ''
//                 ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
//                 : ''
//             }
//             className={
//               formErrors.descr
//                 ? 'create__input create__input--title error'
//                 : 'create__input create__input--title'
//             }
//           />
//           {formErrors.descr && <span className="errorMsg">{formErrors.descr}</span>}
//           <div className="photoList">
//             <div>{photoList.length >= 1 || <div className="addPhoto"></div>}</div>
//             {photoList.map((photo, index) => (
//               <TaskPhoto photo={photo} key={index} deletePhoto={deletePhoto} />
//             ))}
//             {photoList.length <= 4 && (
//               <input
//                 onChange={(e) => handlePhoto(e)}
//                 className="custom-file-input"
//                 type="file"
//               />
//             )}
//           </div>
//           <div className="create__filter">
//             <h2 className="filter-modal__title">Предмет</h2>
//             <div className={formErrors.discipline ? 'error' : ''}>
//               <FilterItem
//                 subTitle={filterState.discipline}
//                 setDiscipline={setDiscipline}
//                 subModal={MODAL_DISCIPLINE}
//               />
//             </div>
//             {formErrors.discipline && (
//               <span className="errorMsg">{formErrors.discipline}</span>
//             )}
//             <h2 className="filter-modal__title">Учебное заведение</h2>
//             <div className={formErrors.institute ? 'error' : ''}>
//               <FilterItem
//                 subTitle={filterState.institute}
//                 setDiscipline={setDiscipline}
//                 subModal={MODAL_INSTITUTE}
//               />
//             </div>
//             {formErrors.institute && (
//               <span className="errorMsg">{formErrors.institute}</span>
//             )}
//             <h2 className="filter-modal__title">Сроки</h2>
//             <h3>С</h3>
//             <div className={formErrors.dateFrom ? 'error-date' : ''}>
//               <DateInput
//                 value={dateFrom}
//                 onChange={setDateFrom}
//                 disablePast={disablePast}
//                 closeOnChange={closeOnChange}
//                 showNeighboringMonth={showNeighboringMonth}
//               />
//             </div>
//             {formErrors.dateFrom && (
//               <span className="errorMsg">{formErrors.dateFrom}</span>
//             )}
//             <h3>До</h3>
//             <div className={formErrors.dateFrom ? 'error-date' : ''}>
//               <DateInput
//                 value={dateTo}
//                 onChange={setDateTo}
//                 disablePast={disablePast}
//                 closeOnChange={closeOnChange}
//                 showNeighboringMonth={showNeighboringMonth}
//               />
//             </div>
//             {formErrors.dateTo && <span className="errorMsg">{formErrors.dateTo}</span>}
//             <input
//               type="text"
//               name="price"
//               placeholder="Укажите цену"
//               value={formValues.price}
//               onChange={handleChange}
//               onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
//               onBlur={
//                 formValues.price === ''
//                   ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
//                   : ''
//               }
//               className={
//                 formErrors.price
//                   ? 'create__input create__input--title error'
//                   : 'create__input create__input--title'
//               }
//             />
//             {formErrors.price && <span className="errorMsg">{formErrors.price}</span>}
//             <div className="switch">
//               <SimpleCell
//                 style={{ color: '#232036' }}
//                 Component="label"
//                 after={<Switch />}>
//                 Публиковать пост
//               </SimpleCell>
//             </div>
//           </div>
//           <div className="create__button">
//             <button onClick={() => handleSubmit()} className="button">
//               Опубликовать
//             </button>
//           </div>
//         </div>
//       </div>
//       <Navigation />
//     </Panel>
//   );
// }

// export default Dev;
