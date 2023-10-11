import { ICON_FEATHER_CORNER_DOWN_LEFT } from '@aracna/icons-feather/assets/corner-down-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-down-left': IconFeatherCornerDownLeftElement
  }
}

export class IconFeatherCornerDownLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_DOWN_LEFT
  }
}

defineCustomElement('icon-feather-corner-down-left', IconFeatherCornerDownLeftElement)
