import { ICON_FEATHER_SQUARE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-square': IconFeatherElement
  }
}

export class IconFeatherSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SQUARE
  }
}

defineCustomElement('icon-feather-square', IconFeatherSquareElement)
