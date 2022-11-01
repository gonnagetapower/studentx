import React, { useState, useEffect, useCallback } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  Snackbar,
  Avatar,
  ModalRoot,
  ModalPage,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './App.css';

import Home from './panels/Home';
import Intro from './panels/Intro';
import { useLocation } from '@happysanta/router';
import {
  PANEL_MAIN,
  PAGE_INTRO,
  PAGE_HOME,
  PANEL_HOME,
  PANEL_INTRO,
  router,
  VIEW_MAIN,
  PANEL_MESSAGES,
  PANEL_PROFILE,
  PANEL_PUBLICATIONS,
} from './router';
import Messages from './views/Messages/Messages';
import Profile from './views/Profile/Profile';
import Navigation from './components/Navigation';
import Main from './views/Main/Main';
import MyPublication from './views/MyPublication/MyPublication';

// const ROUTES = {
//   HOME: 'home',
//   INTRO: 'intro',
//   FIRST: 'first',
//   TASK: `task/`,
// };

const STORAGE_KEYS = {
  STATUS: 'status',
};

const App = () => {
  const location = useLocation();

  const [scheme, setScheme] = useState('bright_light');
  // const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [userApplyPolicy, setUserApplyPolicy] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [open, setOpen] = useState(false);

  const [checked, setChecked] = useState(false);

  const onCheckBoxChecked = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        setScheme('light');
      }
    });

    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      const storageData = await bridge.send('VKWebAppStorageGet', {
        keys: Object.values(STORAGE_KEYS),
      });
      const data = {};
      storageData.keys.forEach(({ key, value }) => {
        try {
          data[key] = value ? JSON.parse(value) : {};
          switch (key) {
            case STORAGE_KEYS.STATUS:
              if (!data[key].userApplyPolicy) {
                router.pushPage(PAGE_HOME);
                setUserApplyPolicy(true);
              }
              break;
            default:
              break;
          }
        } catch (error) {
          setSnackBar(
            <Snackbar
              layout="vertical"
              onClose={() => setSnackBar(null)}
              duration={900}
              before={<Avatar size={24} />}></Snackbar>,
          );
        }
      });
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (page) => {
    router.pushPage(PAGE_HOME);
    console.log(router);
    setOpen(false);
  };

  const veiwIntro = async function () {
    try {
      await bridge.send('VKWebAppStorageSet', {
        key: STORAGE_KEYS.STATUS,
        value: JSON.stringify({
          userApplyPolicy: true,
        }),
      });
      go(PAGE_HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          {console.log(location.getPageId())}
          <SplitLayout
            modal={
              <ModalRoot onClose={() => setOpen(false)} activeModal={open ? 'modal' : null}>
                <ModalPage nav="modal" settlingHeight={20}>
                  <div style={{ height: '150vh' }}>
                    <div className="modal-container">
                      <div className="modal">
                        <h1 className="modal__title">Условия пользования</h1>
                        <p className="modal__descr">
                          Данное приложение создано для помощи студентам. Если вы хотите
                          зарабатывать, перейдите во вкладку “Исполнитель”, если желаете получить
                          услугу - то “Покупатель”.
                        </p>
                        <p className="modal__descr">
                          Правила: 1. <br />
                          Кстати, сторонники тоталитаризма в науке лишь добавляют фракционных
                          разногласий и представлены в исключительно положительном свете. Лишь
                          диаграммы связей, превозмогая сложившуюся непростую экономическую
                          ситуацию, призваны к ответу. <br />
                          2. Равным образом, внедрение современных методик, в своём классическом
                          представлении, допускает внедрение системы массового участия! Безусловно,
                          я понимаю объективно ситуацию где связь противоречит экономической
                          ситуации
                        </p>
                        <p className="modal__descr">
                          Данное приложение создано для помощи студентам. Если вы хотите
                          зарабатывать, перейдите во вкладку “Исполнитель”, если желаете получить
                          услугу - то “Покупатель”.
                        </p>
                        <p className="modal__descr">
                          Правила: 1. <br />
                          Кстати, сторонники тоталитаризма в науке лишь добавляют фракционных
                          разногласий и представлены в исключительно положительном свете. Лишь
                          диаграммы связей, превозмогая сложившуюся непростую экономическую
                          ситуацию, призваны к ответу. <br />
                          2. Равным образом, внедрение современных методик, в своём классическом
                          представлении, допускает внедрение системы массового участия! Безусловно,
                          я понимаю объективно ситуацию где связь противоречит экономической
                          ситуации
                        </p>
                        <p className="modal__descr">
                          Данное приложение создано для помощи студентам. Если вы хотите
                          зарабатывать, перейдите во вкладку “Исполнитель”, если желаете получить
                          услугу - то “Покупатель”.
                        </p>
                        <p className="modal__descr">
                          Правила: 1. <br />
                          Кстати, сторонники тоталитаризма в науке лишь добавляют фракционных
                          разногласий и представлены в исключительно положительном свете. Лишь
                          диаграммы связей, превозмогая сложившуюся непростую экономическую
                          ситуацию, призваны к ответу. <br />
                          2. Равным образом, внедрение современных методик, в своём классическом
                          представлении, допускает внедрение системы массового участия! Безусловно,
                          я понимаю объективно ситуацию где связь противоречит экономической
                          ситуации
                        </p>
                      </div>
                      <div className="modal__checkbox">
                        <input
                          checked={checked}
                          onChange={onCheckBoxChecked}
                          type="checkbox"
                          id="policy"
                          name="policy"
                        />
                        Согласен с правилами
                      </div>
                      <button
                        disabled={!checked ? true : false}
                        className={checked ? 'button modal__button' : 'button--off modal__button'}
                        onClick={() => go(PAGE_HOME)}>
                        Понятно
                      </button>
                    </div>
                  </div>
                </ModalPage>
              </ModalRoot>
            }>
            <SplitCol>
              <div className="container">
                <View id={VIEW_MAIN} activePanel={location.getViewActivePanel(VIEW_MAIN)}>
                  {/* <Home id={PANEL_HOME} PANEL_MESSAGES={PANEL_MESSAGES} /> */}
                  <Intro
                    id={PANEL_MAIN}
                    go={veiwIntro}
                    userApplyPolicy={userApplyPolicy}
                    setOpen={setOpen}
                  />
                  <Main id={PANEL_HOME} />
                  <Messages id={PANEL_MESSAGES} />
                  <Profile id={PANEL_PROFILE} />
                  <MyPublication id={PANEL_PUBLICATIONS} />
                </View>
              </div>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
