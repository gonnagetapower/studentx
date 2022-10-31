import { Page, Router } from '@happysanta/router'

export const PAGE_MAIN = '/main'
export const PANEL_MAIN = 'panel_main';

export const PAGE_HOME = '/home'
export const PANEL_HOME = 'panel_home'


export const PAGE_MESSAGES = '/messages'
export const PAGE_PUBLICATIONS = '/publications/:id([0-9]+)'
export const PAGE_PROFILE = '/profile'


// export const PANEL_MAIN = 'panel_main'
export const PANEL_MESSAGES = 'panel_messages'
export const PANEL_PUBLICATIONS = 'panel_publications'
export const PANEL_PROFILE = 'panel_profile'


export const VIEW_MAIN = 'view_main'

export const PANEL_TASK = 'panel_task'

export const MODAL_CARD = 'modal_card'
export const MODAL_PAGE = 'modal_page'


const routes = {
    [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
    [PAGE_HOME]: new Page(PANEL_HOME, VIEW_MAIN),
    [PAGE_MESSAGES]: new Page(PANEL_MESSAGES, VIEW_MAIN),
    [PAGE_PUBLICATIONS]: new Page(PANEL_PUBLICATIONS, VIEW_MAIN),
    [PAGE_PROFILE]: new Page(PANEL_PROFILE, VIEW_MAIN),
}

export const router = new Router(routes)


router.start();