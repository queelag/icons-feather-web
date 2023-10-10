import { ICON_FEATHER_BATTERY } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-battery': IconFeatherElement
  }
}

export class IconFeatherBatteryElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BATTERY
  }
}

defineCustomElement('icon-feather-battery', IconFeatherBatteryElement)
