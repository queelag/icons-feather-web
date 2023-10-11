import { ICON_FEATHER_ARROW_UP } from '@aracna/icons-feather/assets/arrow-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up': IconFeatherElement
  }
}

export class IconFeatherArrowUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_UP
  }
}

defineCustomElement('icon-feather-arrow-up', IconFeatherArrowUpElement)
