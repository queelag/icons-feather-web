import { ICON_F_ARROW_UP } from '@aracna/icons-feather/assets/arrow-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up': IconFeatherArrowUpElement
  }
}

export class IconFeatherArrowUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_UP
  }
}

defineCustomElement('icon-feather-arrow-up', IconFeatherArrowUpElement)
