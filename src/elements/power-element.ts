import { ICON_F_POWER } from '@aracna/icons-feather/assets/power'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-power': IconFeatherPowerElement
  }
}

export class IconFeatherPowerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_POWER
  }
}

defineCustomElement('icon-feather-power', IconFeatherPowerElement)
