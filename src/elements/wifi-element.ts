import { ICON_FEATHER_WIFI } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-wifi': IconFeatherElement
  }
}

export class IconFeatherWifiElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_WIFI
  }
}

defineCustomElement('icon-feather-wifi', IconFeatherWifiElement)
