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
  usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './App.css';
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
  MODAL_DISCIPLINE,
  MODAL_TOWNS,
  MODAL_INSTITUTE,
  PANEL__CREATE,
  PANEL_CHATROOM,
  POPOUT_CONFIRM,
  PANEL_WELCOME,
  PANEL_DEV,
} from './router';

import { Messages, Profile, Main, MyPublication, Respond, Intro, Dev } from './panels';

import { Filter, Discipline, Towns, Institute, Terms } from './modals/';

import CreateTask from './panels/CreateTask/CreateTask';
import ChatRoom from './panels/ChatRoom/ChatRoom';
import Confirm from './popouts/Confirm';
import Welcome from './panels/Welcome/Welcome';

const STORAGE_KEYS = {
  STATUS: 'status',
};

const App = () => {
  const location = useLocation();

  //filter-logic
  const [discipline, setDiscipline] = useState('');

  const [checked, setChecked] = useState(false);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [userApplyPolicy, setUserApplyPolicy] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [open, setOpen] = useState(false);

  const onCheckBoxChecked = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      console.log(user);
      //   const storageData = await bridge.send('VKWebAppStorageGet', {
      //     keys: Object.values(STORAGE_KEYS),
      //   });
      //   const data = {};
      //   storageData.keys.forEach(({ key, value }) => {
      //     try {
      //       data[key] = value ? JSON.parse(value) : {};
      //       switch (key) {
      //         case STORAGE_KEYS.STATUS:
      //           if (data[key].userApplyPolicy) {
      //             router.pushPage(PAGE_HOME);
      //             setUserApplyPolicy(true);
      //           }
      //           break;
      //         default:
      //           break;
      //       }
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   });
      //   setUser(user);
      //   setPopout(null);
    }
    fetchData();
  }, []);

  const go = (page) => {
    router.pushPage(page);
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
        veiwIntro={veiwIntro}
      />
      <Filter id={MODAL_FILTER} discipline={discipline} setDiscipline={setDiscipline} />
      <Discipline
        id={MODAL_DISCIPLINE}
        discipline={discipline}
        setDiscipline={setDiscipline}
      />
      <Towns id={MODAL_TOWNS} />
      <Institute id={MODAL_INSTITUTE} />
    </ModalRoot>
  );

  const popouts = (() => {
    if (location.getPopupId() === POPOUT_CONFIRM) {
      return <Confirm />;
    }
  })();

  const platfrom = usePlatform();

  return (
    <AppRoot>
      <ConfigProvider
        platfrom={platfrom}
        webviewType={'INTERNAL'}
        appearance={'light'}
        transitionMotionEnabled={true}>
        <SplitLayout modal={modal} popout={popouts}>
          <SplitCol>
            <div className="container">
              <View id={VIEW_MAIN} activePanel={location.getViewActivePanel(VIEW_MAIN)}>
                <Welcome id={PANEL_WELCOME} userApplyPolicy={userApplyPolicy} />
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
                <CreateTask id={PANEL__CREATE} />
                <ChatRoom id={PANEL_CHATROOM} />
              </View>
            </div>
          </SplitCol>
        </SplitLayout>
      </ConfigProvider>
    </AppRoot>
  );
};

export default App;
