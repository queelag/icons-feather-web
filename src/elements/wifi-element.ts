import { ICON_FEATHER_WIFI } from '@aracna/icons-feather/assets/wifi'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-wifi': IconFeatherWifiElement
  }
}

export class IconFeatherWifiElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_WIFI
  }
}

defineCustomElement('icon-feather-wifi', IconFeatherWifiElement)
