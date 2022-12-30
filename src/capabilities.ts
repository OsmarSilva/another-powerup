import {Trello} from './types/trello'
import {CapabilityProps} from './types/power-up'

// Capability Imports Here
import {getCardButton} from './card-button/capability'
import {getShowSettings} from './show-settings/capability'
import {getOnDisable} from './on-disable/capability'
import {getOnEnable} from './on-enable/capability'
import {getListSorter} from './list-sorter/capability'
import {getListAction} from './list-action/capability'
import {getCardDetailBadge} from './card-detail-badge/capability'
import {getCardBadge} from './card-badge/capability'
import {getCardBackSection} from './card-back-section/capability'
import {getBoardButton} from './board-button/capability'

const CAPABILITY_PROPS: CapabilityProps = {
  baseUrl: window.location.href.replace(/\/$/, ''),
  icon: {
    dark: '/static/icon-dark.png',
    light: '/static/icon-light.png'
  }
}

window.TrelloPowerUp.initialize({
    'card-buttons': (t: Trello.PowerUp.IFrame) => getCardButton(t, CAPABILITY_PROPS),
    'show-settings': (t: Trello.PowerUp.IFrame) => getShowSettings(t, CAPABILITY_PROPS),
    'on-disable': (t: Trello.PowerUp.IFrame) => getOnDisable(t, CAPABILITY_PROPS),
    'on-enable': (t: Trello.PowerUp.IFrame) => getOnEnable(t, CAPABILITY_PROPS),
    'list-sorters': (t: Trello.PowerUp.IFrame) => getListSorter(t, CAPABILITY_PROPS),
    'list-actions': (t: Trello.PowerUp.IFrame) => getListAction(t, CAPABILITY_PROPS),
    'card-detail-badges': (t: Trello.PowerUp.IFrame) => getCardDetailBadge(t, CAPABILITY_PROPS),
    'card-badges': (t: Trello.PowerUp.IFrame) => getCardBadge(t, CAPABILITY_PROPS),
    'card-back-section': (t: Trello.PowerUp.IFrame) => getCardBackSection(t, CAPABILITY_PROPS),
    'board-buttons': (t: Trello.PowerUp.IFrame) => getBoardButton(t, CAPABILITY_PROPS),
})
