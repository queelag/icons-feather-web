import { ICON_F_MAP_PIN } from '@aracna/icons-feather/assets/map-pin'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-map-pin': IconFeatherMapPinElement
  }
}

export class IconFeatherMapPinElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MAP_PIN
  }
}

defineCustomElement('icon-feather-map-pin', IconFeatherMapPinElement)
