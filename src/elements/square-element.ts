import { ICON_FEATHER_SQUARE } from '@aracna/icons-feather/assets/square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-square': IconFeatherSquareElement
  }
}

export class IconFeatherSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SQUARE
  }
}

defineCustomElement('icon-feather-square', IconFeatherSquareElement)
