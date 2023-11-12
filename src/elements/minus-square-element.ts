import { ICON_F_MINUS_SQUARE } from '@aracna/icons-feather/assets/minus-square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minus-square': IconFeatherMinusSquareElement
  }
}

export class IconFeatherMinusSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MINUS_SQUARE
  }
}

defineCustomElement('icon-feather-minus-square', IconFeatherMinusSquareElement)
