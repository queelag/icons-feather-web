import { ICON_FEATHER_DIVIDE_CIRCLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-divide-circle': IconFeatherElement
  }
}

export class IconFeatherDivideCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DIVIDE_CIRCLE
  }
}

defineCustomElement('icon-feather-divide-circle', IconFeatherDivideCircleElement)
