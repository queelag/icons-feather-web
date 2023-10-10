import { ICON_FEATHER_MAP_PIN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-map-pin': IconFeatherElement
  }
}

export class IconFeatherMapPinElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MAP_PIN
  }
}

defineCustomElement('icon-feather-map-pin', IconFeatherMapPinElement)
