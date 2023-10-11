import { ICON_FEATHER_CORNER_LEFT_DOWN } from '@aracna/icons-feather/assets/corner-left-down'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-left-down': IconFeatherCornerLeftDownElement
  }
}

export class IconFeatherCornerLeftDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_LEFT_DOWN
  }
}

defineCustomElement('icon-feather-corner-left-down', IconFeatherCornerLeftDownElement)
