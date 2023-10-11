import { ICON_FEATHER_BELL_OFF } from '@aracna/icons-feather/assets/bell-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bell-off': IconFeatherBellOffElement
  }
}

export class IconFeatherBellOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BELL_OFF
  }
}

defineCustomElement('icon-feather-bell-off', IconFeatherBellOffElement)
