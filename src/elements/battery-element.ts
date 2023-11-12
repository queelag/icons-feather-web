import { ICON_F_BATTERY } from '@aracna/icons-feather/assets/battery'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-battery': IconFeatherBatteryElement
  }
}

export class IconFeatherBatteryElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_BATTERY
  }
}

defineCustomElement('icon-feather-battery', IconFeatherBatteryElement)
