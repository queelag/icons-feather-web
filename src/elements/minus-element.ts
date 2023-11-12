import { ICON_F_MINUS } from '@aracna/icons-feather/assets/minus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minus': IconFeatherMinusElement
  }
}

export class IconFeatherMinusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MINUS
  }
}

defineCustomElement('icon-feather-minus', IconFeatherMinusElement)
