import { ICON_FEATHER_CORNER_DOWN_RIGHT } from '@aracna/icons-feather/assets/corner-down-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-down-right': IconFeatherCornerDownRightElement
  }
}

export class IconFeatherCornerDownRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_DOWN_RIGHT
  }
}

defineCustomElement('icon-feather-corner-down-right', IconFeatherCornerDownRightElement)
