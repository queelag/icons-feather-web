import { ICON_F_SLACK } from '@aracna/icons-feather/assets/slack'
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
    this.src = ICON_F_SLACK
  }
}

defineCustomElement('icon-feather-slack', IconFeatherSlackElement)
