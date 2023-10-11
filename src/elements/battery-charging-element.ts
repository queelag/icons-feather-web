import { ICON_FEATHER_BATTERY_CHARGING } from '@aracna/icons-feather/assets/battery-charging'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-battery-charging': IconFeatherBatteryChargingElement
  }
}

export class IconFeatherBatteryChargingElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BATTERY_CHARGING
  }
}

defineCustomElement('icon-feather-battery-charging', IconFeatherBatteryChargingElement)
