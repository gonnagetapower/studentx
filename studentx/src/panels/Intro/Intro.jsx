import React, { Fragment } from 'react';
import girl from './../../img/girl.svg';
import puggleSmall from './../../img/puggleS.svg';
import puddleLarge from './../../img/puddle-Large.svg';

import './Intro.css';

import { Panel, Div, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { MODAL_TERMS, router } from './../../router';

const Intro = ({ id }) => {
  return (
    <Panel id={id} centered={true}>
        <Fragment>
          <div className="intro">
            <h2 className="intro__title">Твой персональный помощник</h2>
            <p className="intro__descr">
              создан для содействия в написании учебных работ
            </p>
            <div className="intro__image">
              <img className="intro__img" src={girl} alt="girl styding photo" />
              <img className="puggle-small" src={puggleSmall} />
              <img className="puggle-large" src={puddleLarge} />
            </div>
          </div>
          <div>
            <button className="button" onClick={() => router.pushModal(MODAL_TERMS)}>
              Хорошо
            </button>
          </div>
        </Fragment>
    </Panel>
  );
};
export default Intro;
