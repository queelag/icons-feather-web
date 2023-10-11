import { ICON_FEATHER_DIVIDE_SQUARE } from '@aracna/icons-feather/assets/divide-square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-divide-square': IconFeatherDivideSquareElement
  }
}

export class IconFeatherDivideSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DIVIDE_SQUARE
  }
}

defineCustomElement('icon-feather-divide-square', IconFeatherDivideSquareElement)
