import { ICON_FEATHER_X_SQUARE } from '@aracna/icons-feather/assets/x-square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-x-square': IconFeatherXSquareElement
  }
}

export class IconFeatherXSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_X_SQUARE
  }
}

defineCustomElement('icon-feather-x-square', IconFeatherXSquareElement)
