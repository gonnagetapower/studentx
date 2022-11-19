import React, { Fragment } from 'react';
import girl from './../../img/girl.svg';

import './Intro.css';

import { Panel, Div, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { MODAL_TERMS, router } from './../../router';

const Intro = ({ id, go, route, userApplyPolicy, setOpen, setActiveModal }) => {
  return (
    <Panel id={id} centered={true}>
      {!userApplyPolicy && (
        <Fragment>
          <Div className="intro">
            <h2 className="intro__title">Твой персональный помощник</h2>
            <p className="intro__descr">создан для содействия в написании учебных работ</p>
            <img className="intro__img" src={girl} alt="girl styding photo" />
          </Div>
          <Div>
            <button className="button" onClick={() => router.pushModal(MODAL_TERMS)}>
              Хорошо
            </button>
          </Div>
        </Fragment>
      )}
    </Panel>
  );
};
export default Intro;
