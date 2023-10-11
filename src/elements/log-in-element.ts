import { ICON_FEATHER_LOG_IN } from '@aracna/icons-feather/assets/log-in'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-log-in': IconFeatherElement
  }
}

export class IconFeatherLogInElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LOG_IN
  }
}

defineCustomElement('icon-feather-log-in', IconFeatherLogInElement)
