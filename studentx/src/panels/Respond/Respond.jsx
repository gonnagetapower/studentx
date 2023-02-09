import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams, useRouter } from '@happysanta/router';
import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import {
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  FixedLayout,
  ScreenSpinner,
  Snackbar,
  Group,
} from '@vkontakte/vkui';

import { Navigation, Person, SkeletonCard } from './../../components';

import nullPhoto from './../../img/nullPhotoIcon.svg';
import emptyPhotoLogo from './../../img/emptyPhotoLogo.svg';

import { Icon28CancelCircleFillRed } from '@vkontakte/icons';

import './Respond.css';

const Respond = () => {
  const router = useRouter();
  const { id } = useParams();

  const [respond, setRespond] = useState();
  const [mounted, setMounted] = useState(false);
  const [snackBar, setSnackBar] = useState(null);

  useEffect(() => {
    const fetchRespond = async () => {
      try {
        const { data } = await axios.get(`https://mtimofeev.fun/api/v2/tasks/${id}`);
        setRespond(data);
        setMounted(true);
        console.log(data);
      } catch (error) {
        setSnackBar(
          <Snackbar
            before={<Icon28CancelCircleFillRed />}
            layout="vertical"
            duration={900}
            onClose={() => setSnackBar(null)}>
            Ошибка сервера
          </Snackbar>,
        );
      }
    };
    fetchRespond();
  }, []);

  if (!respond) {
    return (
      <Group>
        <div style={{ height: '100vh' }}>
          <ScreenSpinner></ScreenSpinner>
        </div>
      </Group>
    );
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
        <div className="respond-header">
          <h2 className="respond-header__title">Объявления</h2>
        </div>
      </PanelHeader>
      <div key={respond.id} className="respond-container">
        <div className="respond-user">
          <Person name={respond.owner} />
        </div>
        <div className="respond-text">
          <h1 className="respond__title">{respond.title}</h1>
          <p className="respond__descr">{respond.description}</p>
        </div>
        <div className="photo-container">
          <img className="respond-photo" src={emptyPhotoLogo} alt="task photo" />
          <img className="respond-photo" src={emptyPhotoLogo} alt="task photo" />
          <img className="respond-photo" src={emptyPhotoLogo} alt="task photo" />
        </div>
        <div className="discipline-container">
          <ul className="list">
            <li className="list-title">Предмет</li>
            <li className="list-title">{respond.category}</li>
          </ul>
          <ul className="list">
            <li className="list-title">Учебное заведение</li>
            <li className="list-title">{respond.university}</li>
          </ul>
          <ul className="list">
            <li className="list-title">Желаемые сроки</li>
            <li className="list-title">до {respond.orderDate}</li>
          </ul>
          <ul className="list">
            <li className="list-title">Цена</li>
            <li className="list-title">{1100}</li>
          </ul>
        </div>
      </div>
      <div className="contactAuthor">
        <button className="button button--write">Написать</button>
        <button className="button button--respond">Откликнуться</button>
      </div>
      <Navigation />
    </div>
  );
};

export default Respond;
