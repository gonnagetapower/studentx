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
  PAGE_HOME,
  PANEL_HOME,
  router,
  VIEW_MAIN,
  PANEL_MESSAGES,
  PANEL_PROFILE,
  PANEL_PUBLICATIONS,
  PANEL_RESPOND,
  MODAL_TERMS,
  MODAL_FILTER,
} from './router';
import Messages from './views/Messages/Messages';
import Profile from './views/Profile/Profile';
import Main from './views/Main/Main';
import MyPublication from './views/MyPublication/MyPublication';
import Respond from './views/Respond/Respond';
import Terms from './modals/Terms/Terms';
import Filter from './modals/Filter/Filter';

const STORAGE_KEYS = {
  STATUS: 'status',
};

const App = () => {
  const location = useLocation();

  const [checked, setChecked] = useState(false);
  const [scheme, setScheme] = useState('bright_light');
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [userApplyPolicy, setUserApplyPolicy] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [open, setOpen] = useState(false);

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

  const modal = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <Terms
        onCheckBoxChecked={onCheckBoxChecked}
        id={MODAL_TERMS}
        checked={checked}
        onClose={() => router.popPage()}
      />
      <Filter id={MODAL_FILTER} />
    </ModalRoot>
  );

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <div className="container">
            <View id={VIEW_MAIN} activePanel={location.getViewActivePanel(VIEW_MAIN)} modal={modal}>
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
              <Respond id={PANEL_RESPOND} />
            </View>
          </div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
