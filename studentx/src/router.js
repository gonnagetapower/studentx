import { Page, Router } from '@happysanta/router'

//view
export const VIEW_MAIN = 'view_main'

//pages
export const PAGE_MAIN = '/main'
export const PANEL_MAIN = 'panel_main'

export const PAGE_HOME = '/home'
export const PANEL_HOME = 'panel_home'

export const PAGE_MESSAGES = '/messages'
export const PANEL_MESSAGES = 'panel_messages'

export const PAGE_PROFILE = '/profile'
export const PANEL_PROFILE = 'panel_profile'

export const PAGE_PUBLICATION = '/publication'
export const PANEL_PUBLICATIONS = 'panel_publications'

export const PAGE_RESPOND = '/respond/:id([0-9]+)'
export const PANEL_RESPOND = '/panel_respond'

export const PAGE_CREATE = '/create'
export const PANEL__CREATE = 'panel_create'

export const PAGE_CHATROOM = '/chat'
export const PANEL_CHATROOM = 'panel_chat'

export const PAGE_WELCOME = '/'
export const PANEL_WELCOME = 'panel_welcome'

export const PAGE_DEV = '/dev'
export const PANEL_DEV = 'panel_dev'

//modals
export const MODAL_TERMS = 'modal_terms'
export const MODAL_FILTER = 'modal_filter'

//modals--subFilter
export const MODAL_DISCIPLINE = 'modal_discipline'
export const MODAL_TOWNS = 'modal_towns'
export const MODAL_INSTITUTE = 'modal_institute'

//popout

export const POPOUT_CONFIRM = 'popout_confirm'

//router
const routes = {
    [PAGE_WELCOME]: new Page(PANEL_WELCOME, VIEW_MAIN),
    [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
    [PAGE_HOME]: new Page(PANEL_HOME, VIEW_MAIN),
    [PAGE_MESSAGES]: new Page(PANEL_MESSAGES, VIEW_MAIN),
    [PAGE_PUBLICATION]: new Page(PANEL_PUBLICATIONS, VIEW_MAIN),
    [PAGE_PROFILE]: new Page(PANEL_PROFILE, VIEW_MAIN),
    [PAGE_RESPOND]: new Page(PANEL_RESPOND, VIEW_MAIN),
    [PAGE_CREATE]: new Page(PANEL__CREATE, VIEW_MAIN),
    [PAGE_CHATROOM]: new Page(PANEL_CHATROOM, VIEW_MAIN),
    [PAGE_DEV]: new Page(PANEL_DEV, VIEW_MAIN)
}

export const router = new Router(routes)


router.start();