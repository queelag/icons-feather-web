import { ICON_FEATHER_MINUS_CIRCLE } from '@aracna/icons-feather/assets/minus-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minus-circle': IconFeatherElement
  }
}

export class IconFeatherMinusCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MINUS_CIRCLE
  }
}

defineCustomElement('icon-feather-minus-circle', IconFeatherMinusCircleElement)
