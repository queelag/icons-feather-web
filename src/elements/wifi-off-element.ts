import { ICON_FEATHER_WIFI_OFF } from '@aracna/icons-feather/assets/wifi-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-wifi-off': IconFeatherElement
  }
}

export class IconFeatherWifiOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_WIFI_OFF
  }
}

defineCustomElement('icon-feather-wifi-off', IconFeatherWifiOffElement)
