import { ICON_F_CORNER_UP_RIGHT } from '@aracna/icons-feather/assets/corner-up-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-up-right': IconFeatherCornerUpRightElement
  }
}

export class IconFeatherCornerUpRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CORNER_UP_RIGHT
  }
}

defineCustomElement('icon-feather-corner-up-right', IconFeatherCornerUpRightElement)
