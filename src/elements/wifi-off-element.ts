import { ICON_F_WIFI_OFF } from '@aracna/icons-feather/assets/wifi-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-wifi-off': IconFeatherWifiOffElement
  }
}

export class IconFeatherWifiOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_WIFI_OFF
  }
}

defineCustomElement('icon-feather-wifi-off', IconFeatherWifiOffElement)
