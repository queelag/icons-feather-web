import { ICON_FEATHER_COMPASS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-compass': IconFeatherElement
  }
}

export class IconFeatherCompassElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_COMPASS
  }
}

defineCustomElement('icon-feather-compass', IconFeatherCompassElement)
