import { ICON_FEATHER_CORNER_RIGHT_UP } from '@aracna/icons-feather/assets/corner-right-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-right-up': IconFeatherCornerRightUpElement
  }
}

export class IconFeatherCornerRightUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_RIGHT_UP
  }
}

defineCustomElement('icon-feather-corner-right-up', IconFeatherCornerRightUpElement)
