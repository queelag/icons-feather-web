import { ICON_FEATHER_TRELLO } from '@aracna/icons-feather/assets/trello'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trello': IconFeatherTrelloElement
  }
}

export class IconFeatherTrelloElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRELLO
  }
}

defineCustomElement('icon-feather-trello', IconFeatherTrelloElement)
