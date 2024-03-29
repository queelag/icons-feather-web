import { ICON_F_LOG_IN } from '@aracna/icons-feather/assets/log-in'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-log-in': IconFeatherLogInElement
  }
}

export class IconFeatherLogInElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_LOG_IN
  }
}

defineCustomElement('icon-feather-log-in', IconFeatherLogInElement)
