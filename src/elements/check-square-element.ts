import { ICON_F_CHECK_SQUARE } from '@aracna/icons-feather/assets/check-square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-check-square': IconFeatherCheckSquareElement
  }
}

export class IconFeatherCheckSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHECK_SQUARE
  }
}

defineCustomElement('icon-feather-check-square', IconFeatherCheckSquareElement)
