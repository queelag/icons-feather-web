import { ICON_FEATHER_SLACK } from '@aracna/icons-feather/assets/slack'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-slack': IconFeatherSlackElement
  }
}

export class IconFeatherSlackElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SLACK
  }
}

defineCustomElement('icon-feather-slack', IconFeatherSlackElement)
