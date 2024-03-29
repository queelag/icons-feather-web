import { ICON_F_CORNER_LEFT_UP } from '@aracna/icons-feather/assets/corner-left-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-left-up': IconFeatherCornerLeftUpElement
  }
}

export class IconFeatherCornerLeftUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CORNER_LEFT_UP
  }
}

defineCustomElement('icon-feather-corner-left-up', IconFeatherCornerLeftUpElement)
