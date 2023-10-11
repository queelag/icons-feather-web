import { ICON_FEATHER_DIVIDE } from '@aracna/icons-feather/assets/divide'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-divide': IconFeatherDivideElement
  }
}

export class IconFeatherDivideElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DIVIDE
  }
}

defineCustomElement('icon-feather-divide', IconFeatherDivideElement)
