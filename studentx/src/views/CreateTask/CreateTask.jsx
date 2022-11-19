import React, { useState } from 'react';
import { useRouter } from '@happysanta/router';

import { Icon28ChevronBack } from '@vkontakte/icons';
import { PanelHeader, PanelHeaderBack, PanelHeaderButton, Panel } from '@vkontakte/vkui';

import './CreateTask.css';

import { Navigation, FilterItem } from '../../components';

const CreateTask = ({ id }) => {
  const router = useRouter();
  const [photoList, setPhotoList] = useState([1]);

  const handleClick = () => {
    const id = photoList.length + 1;
    setPhotoList((prev) => [
      ...prev,
      {
        id: id,
      },
    ]);
  };

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton
            aria-label="кнопка"
            onClick={() => {
              router.popPage();
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
            placeholder="Обозначь тематику, например: написать курсовую"
            rows="1"
            className="create__input create__input--title"
            type="text"
          />
          <textarea
            placeholder="Опиши задачу, чем больше подробностей, тем лучше результат :)"
            rows="5"
            className="create__input create__input--descr"
            type="text"
          />
          <div className="photoList">
            {photoList.map((photo, key) => (
              <input key={key} id={photo.id} className="custom-file-input" type="file" />
            ))}
            <div onClick={() => handleClick()} className="addPhoto"></div>
          </div>
          <div className="create__filter">
            <FilterItem subTitle={'Выбрать фильтры'} />
          </div>
          <div className="create__button">
            <button className="button">Опубликовать</button>
          </div>
        </div>
      </div>
      <Navigation />
    </Panel>
  );
};

export default CreateTask;
