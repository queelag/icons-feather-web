import { ICON_F_DIVIDE_CIRCLE } from '@aracna/icons-feather/assets/divide-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-divide-circle': IconFeatherDivideCircleElement
  }
}

export class IconFeatherDivideCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_DIVIDE_CIRCLE
  }
}

defineCustomElement('icon-feather-divide-circle', IconFeatherDivideCircleElement)
