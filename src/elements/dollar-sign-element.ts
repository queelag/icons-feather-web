import { ICON_FEATHER_DOLLAR_SIGN } from '@aracna/icons-feather/assets/dollar-sign'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-dollar-sign': IconFeatherDollarSignElement
  }
}

export class IconFeatherDollarSignElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DOLLAR_SIGN
  }
}

defineCustomElement('icon-feather-dollar-sign', IconFeatherDollarSignElement)
