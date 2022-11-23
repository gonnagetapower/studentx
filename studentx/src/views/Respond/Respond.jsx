import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams, useRouter } from '@happysanta/router';
import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import { PanelHeader, PanelHeaderBack, PanelHeaderButton, FixedLayout } from '@vkontakte/vkui';

import { Navigation, Person } from './../../components';

import nullPhoto from './../../img/nullPhotoIcon.svg';
import emptyPhotoLogo from './../../img/emptyPhotoLogo.svg';

import './Respond.css';

const Respond = () => {
  const router = useRouter();
  const { id } = useParams();

  const [respond, setRespond] = useState();

  useEffect(() => {
    const fetchRespond = async () => {
      try {
        console.log(id);
        const data = await axios.get(`https://635c0281fc2595be263e82f3.mockapi.io/tasks?id=${id}`);
        setRespond(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRespond();
  }, []);

  if (!respond) {
    return <>'Загрузка'</>;
  }

  return (
    <div>
      <PanelHeader
        left={
          <PanelHeaderButton
            style={{ color: 'black' }}
            aria-label="кнопка"
            onClick={() => {
              router.popPage();
            }}>
            <Icon28ChevronBack />
          </PanelHeaderButton>
        }
        before={<PanelHeaderBack />}>
        <div className="header">
          <h2 className="header__title">Объявления</h2>
        </div>
      </PanelHeader>
      {respond.data.map((obj) => (
        <div key={obj.id} className="respond-container">
          <div className="respond-user">
            <Person name={'Наташа Ростова'} />
          </div>
          <div className="respond-text">
            <h1 className="respond__title">{obj.title}</h1>
            <p className="respond__descr">{obj.description}</p>
          </div>
          <div className="photo-container">
            <img className="respond-photo" src={emptyPhotoLogo} alt="task photo" />
            <img className="respond-photo" src={emptyPhotoLogo} alt="task photo" />
            <img className="respond-photo" src={emptyPhotoLogo} alt="task photo" />
          </div>
          <div className="discipline-container">
            <ul className="list">
              <li className="list-title">Предмет</li>
              <li>{obj.taskType}</li>
            </ul>
            <ul className="list">
              <li className="list-title">Учебное заведение</li>
              <li>УрФУ</li>
              <li>Угму</li>
            </ul>
            <ul className="list">
              <li className="list-title">Желаемые сроки</li>
              <li>до 12.12.2022</li>
            </ul>
            <ul className="list">
              <li className="list-title">Предмет</li>
              <li>{obj.price}</li>
            </ul>
          </div>
        </div>
      ))}
      <div className="contactAuthor">
        <button className="button button--write">Написать</button>
        <button className="button button--respond">Откликнуться</button>
      </div>
      <Navigation />
    </div>
  );
};

export default Respond;
