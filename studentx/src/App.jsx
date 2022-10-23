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

import Home from './panels/Home';
import Intro from './panels/Intro';

const ROUTES = {
  HOME: 'home',
  INTRO: 'intro',
  FIRST: 'first',
};

const STORAGE_KEYS = {
  STATUS: 'status',
};

const App = () => {
  const [scheme, setScheme] = useState('bright_light');
  const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [userApplyPolicy, setUserApplyPolicy] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [open, setOpen] = useState(false);

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
                setActivePanel(ROUTES.HOME);
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

  const go = (panel) => {
    setActivePanel(panel);
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
      go(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            modal={
              <ModalRoot onClose={() => setOpen(false)} activeModal={open ? 'modal' : null}>
                <ModalPage nav="modal" settlingHeight={20}>
                  <div style={{ height: '150vh' }}>
                    <h1>Условия пользования</h1>
                    <p>
                      Данное приложение создано для помощи студентам. Если вы хотите зарабатывать,
                      перейдите во вкладку “Исполнитель”, если желаете получить услугу - то
                      “Покупатель”.
                    </p>
                    <p>
                      Правила: 1. Кстати, сторонники тоталитаризма в науке лишь добавляют
                      фракционных разногласий и представлены в исключительно положительном свете.
                      Лишь диаграммы связей, превозмогая сложившуюся непростую экономическую
                      ситуацию, призваны к ответу. 2. Равным образом, внедрение современных методик,
                      в своём классическом представлении, допускает внедрение системы массового
                      участия! Безусловно, я понимаю объективно ситуацию где связь противоречит
                      экономической ситуации
                    </p>
                    <button className="buttonExample" onClick={() => go(ROUTES.HOME)}>
                      Хорошо
                    </button>
                  </div>
                </ModalPage>
              </ModalRoot>
            }>
            <SplitCol>
              <div className="container">
                <View activePanel={activePanel}>
                  <Home id="home" fetchedUser={fetchedUser} go={go} />
                  {/* <Example id="home" go={go} route={ROUTES} /> */}
                  <Intro
                    id={ROUTES.INTRO}
                    go={veiwIntro}
                    route={ROUTES.HOME}
                    userApplyPolicy={userApplyPolicy}
                    setOpen={setOpen}
                  />
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
