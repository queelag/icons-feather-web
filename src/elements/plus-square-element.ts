import { ICON_FEATHER_PLUS_SQUARE } from '@aracna/icons-feather/assets/plus-square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-plus-square': IconFeatherPlusSquareElement
  }
}

export class IconFeatherPlusSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PLUS_SQUARE
  }
}

defineCustomElement('icon-feather-plus-square', IconFeatherPlusSquareElement)
