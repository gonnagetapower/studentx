import React, { Fragment } from 'react';
import girl from './../../img/girl.svg';

import './Intro.css';

import { Panel, Div, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { MODAL_TERMS, router } from './../../router';

const Intro = ({ id, go, userApplyPolicy }) => {
  return (
    <Panel id={id} centered={true}>
      {!userApplyPolicy && (
        <Fragment>
          <div className="intro">
            <h2 className="intro__title">Твой персональный помощник</h2>
            <p className="intro__descr">
              создан для содействия в написании учебных работ
            </p>
            <img className="intro__img" src={girl} alt="girl styding photo" />
          </div>
          <div>
            <button className="button" onClick={() => router.pushModal(MODAL_TERMS)}>
              Хорошо
            </button>
          </div>
        </Fragment>
      )}
    </Panel>
  );
};
export default Intro;
