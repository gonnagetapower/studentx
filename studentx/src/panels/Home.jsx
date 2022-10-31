import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Group,
  Cell,
  SplitLayout,
  SplitCol,
  usePlatform,
  useAdaptivity,
  Epic,
  Tabbar,
  TabbarItem,
  PanelHeaderBack,
  Placeholder,
} from '@vkontakte/vkui';
import {
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
} from '@vkontakte/icons';
import Main from '../views/Main/Main';

//icons
import MainIcon from './../img/homeIcon.svg';
import PublicationIcon from './../img/publicationIcon.svg';
import ProfileIcon from './../img/profileIcon.svg';

//pages
import Messages from '../views/Messages/Messages';
import MyPublication from '../views/MyPublication/MyPublication';
import Profile from '../views/Profile/Profile';
import Navigation from '../components/Navigation';

const Home = ({ go, ROUTES }) => {
  const platform = usePlatform();
  const viewWidth = useAdaptivity();
  const [activeStory, setActiveStory] = React.useState('profile');
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
  const isDesktop = viewWidth >= viewWidth.TABLET;
  const hasHeader = platform !== 'VKCOM';

  return (
    <SplitLayout
      header={hasHeader && <PanelHeader separator={false} />}
      style={{ justifyContent: 'center' }}>
      {isDesktop && (
        <SplitCol fixed width={280} maxWidth={280}>
          <Panel>
            {hasHeader && <PanelHeader />}
            <Group>
              <Cell
                disabled={activeStory === 'feed'}
                style={
                  activeStory === 'feed'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="feed"
                onClick={onStoryChange}
                before={<Icon28NewsfeedOutline />}>
                feed
              </Cell>
              <Cell
                disabled={activeStory === 'services'}
                style={
                  activeStory === 'services'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="publication"
                onClick={onStoryChange}
                before={<Icon28ServicesOutline />}>
                publication
              </Cell>
              <Cell
                disabled={activeStory === 'messages'}
                style={
                  activeStory === 'messages'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="messages"
                onClick={onStoryChange}
                before={<Icon28MessageOutline />}>
                messages
              </Cell>
              <Cell
                disabled={activeStory === 'profile'}
                style={
                  activeStory === 'profile'
                    ? {
                        backgroundColor: 'var(--vkui--color_background_secondary)',
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="profile"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}>
                profile
              </Cell>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? '560px' : '100%'}
        maxWidth={isDesktop ? '560px' : '100%'}>
        <Epic
          activeStory={activeStory}
          tabbar={
            !isDesktop && <Navigation onStoryChange={onStoryChange} activeStory={activeStory} />
          }>
          <Main id="main" activePanel="main" go={go} ROUTES={ROUTES} />
          <MyPublication id="publication" activePanel="publication" />
          <Messages id="messages" activePanel="messages" />
          <Profile id="profile" activePanel="profile" />
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default Home;
