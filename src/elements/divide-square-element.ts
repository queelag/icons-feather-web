import { ICON_FEATHER_DIVIDE_SQUARE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-divide-square': IconFeatherElement
  }
}

export class IconFeatherDivideSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DIVIDE_SQUARE
  }
}

defineCustomElement('icon-feather-divide-square', IconFeatherDivideSquareElement)
