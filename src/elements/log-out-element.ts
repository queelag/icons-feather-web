import { ICON_FEATHER_LOG_OUT } from '@aracna/icons-feather/assets/log-out'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-log-out': IconFeatherLogOutElement
  }
}

export class IconFeatherLogOutElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LOG_OUT
  }
}

defineCustomElement('icon-feather-log-out', IconFeatherLogOutElement)
