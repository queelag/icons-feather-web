import { ICON_F_ARROW_DOWN } from '@aracna/icons-feather/assets/arrow-down'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-down': IconFeatherArrowDownElement
  }
}

export class IconFeatherArrowDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_DOWN
  }
}

defineCustomElement('icon-feather-arrow-down', IconFeatherArrowDownElement)
