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
  PullToRefresh,
  Root,
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
  VIEW_WELCOME,
  MODAL_FAQ,
  PANEL_NOTICE,
} from './router';

import {
  Messages,
  Profile,
  Main,
  MyPublication,
  Respond,
  Intro,
  Dev,
  Notice,
} from './panels';

import { Filter, Discipline, Towns, Institute, Terms, FAQ } from './modals/';

import CreateTask from './panels/CreateTask/CreateTask';
import ChatRoom from './panels/ChatRoom/ChatRoom';
import Confirm from './popouts/Confirm';
import Welcome from './panels/Welcome/Welcome';
import { useDispatch } from 'react-redux';
import { registration, login, check } from './redux/slices/appSlice';
import { fetchMe } from './redux/slices/profileSlice';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  //filter-logic
  const [discipline, setDiscipline] = useState('');

  const [checked, setChecked] = useState(false);
  const [userApplyPolicy, setUserApplyPolicy] = useState(false);
  const [open, setOpen] = useState(false);

  const onCheckBoxChecked = () => {
    setChecked(!checked);
  };

  // my profile

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(fetchMe()).unwrap();
    };
    fetchUser();
  }, []);

  //refreshToken

  useEffect(() => {
    const token = localStorage.getItem('tokenRefresh');
    dispatch(check(token));
  }, []);

  //registration && login && createToken

  const enter = async () => {
    try {
      const user = await bridge.send('VKWebAppGetUserInfo');
      await dispatch(registration(user.id, 'password')).unwrap();
      await dispatch(login(user.id, 'password')).unwrap();
      router.pushPage(PAGE_HOME);
    } catch (err) {
      console.log(err);
    }
  };

  const modal = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <Terms
        onCheckBoxChecked={onCheckBoxChecked}
        id={MODAL_TERMS}
        checked={checked}
        onClose={() => router.popPage()}
        viewIntro={enter}
      />
      <Filter id={MODAL_FILTER} discipline={discipline} setDiscipline={setDiscipline} />
      <Discipline
        id={MODAL_DISCIPLINE}
        discipline={discipline}
        setDiscipline={setDiscipline}
      />
      <Towns id={MODAL_TOWNS} />
      <Institute id={MODAL_INSTITUTE} />
      <FAQ id={MODAL_FAQ} />
    </ModalRoot>
  );

  const popouts = (() => {
    if (location.getPopupId() === POPOUT_CONFIRM) {
      return <Confirm />;
    }
  })();

  const platfrom = usePlatform();
  return (
    <ConfigProvider
      platfrom={platfrom}
      appearance={'light'}
      transitionMotionEnabled={true}>
      <AdaptivityProvider>
        <AppRoot scroll="global">
          <SplitLayout modal={modal} popout={popouts}>
            <SplitCol animate={true}>
              <div className="container">
                <Root activeView={location.getViewId()}>
                  <View
                    id={VIEW_WELCOME}
                    history={
                      location.hasOverlay() ? [] : location.getViewHistory(VIEW_WELCOME)
                    }
                    activePanel={location.getViewActivePanel(VIEW_WELCOME)}>
                    <Welcome
                      id={PANEL_WELCOME}
                      userApplyPolicy={userApplyPolicy}
                      activePanel={location.getViewActivePanel(VIEW_WELCOME)}
                    />
                  </View>
                  <View
                    id={VIEW_MAIN}
                    activePanel={location.getViewActivePanel(VIEW_MAIN)}
                    history={
                      location.hasOverlay() ? [] : location.getViewHistory(VIEW_MAIN)
                    }>
                    <Intro
                      id={PANEL_MAIN}
                      userApplyPolicy={userApplyPolicy}
                      setOpen={setOpen}
                    />
                    <Main id={PANEL_HOME} />
                    <MyPublication id={PANEL_PUBLICATIONS} />
                    <Messages id={PANEL_MESSAGES} />
                    <Profile id={PANEL_PROFILE} />
                    <Respond id={PANEL_RESPOND} />
                    <CreateTask id={PANEL__CREATE} />
                    <ChatRoom id={PANEL_CHATROOM} />
                    <Notice id={PANEL_NOTICE} />
                    <Dev id={PANEL_DEV} />
                  </View>
                </Root>
              </div>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
