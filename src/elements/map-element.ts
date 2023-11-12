import { ICON_F_MAP } from '@aracna/icons-feather/assets/map'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-map': IconFeatherMapElement
  }
}

export class IconFeatherMapElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MAP
  }
}

defineCustomElement('icon-feather-map', IconFeatherMapElement)
