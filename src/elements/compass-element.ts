import { ICON_F_COMPASS } from '@aracna/icons-feather/assets/compass'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-compass': IconFeatherCompassElement
  }
}

export class IconFeatherCompassElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_COMPASS
  }
}

defineCustomElement('icon-feather-compass', IconFeatherCompassElement)
