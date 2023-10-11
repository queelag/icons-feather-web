import { ICON_FEATHER_CORNER_RIGHT_DOWN } from '@aracna/icons-feather/assets/corner-right-down'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-right-down': IconFeatherElement
  }
}

export class IconFeatherCornerRightDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_RIGHT_DOWN
  }
}

defineCustomElement('icon-feather-corner-right-down', IconFeatherCornerRightDownElement)
