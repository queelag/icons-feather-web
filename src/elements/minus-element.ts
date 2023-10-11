import { ICON_FEATHER_MINUS } from '@aracna/icons-feather/assets/minus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minus': IconFeatherElement
  }
}

export class IconFeatherMinusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MINUS
  }
}

defineCustomElement('icon-feather-minus', IconFeatherMinusElement)
