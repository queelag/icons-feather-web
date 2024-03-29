import { ICON_F_ARROW_UP_CIRCLE } from '@aracna/icons-feather/assets/arrow-up-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up-circle': IconFeatherArrowUpCircleElement
  }
}

export class IconFeatherArrowUpCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_UP_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-up-circle', IconFeatherArrowUpCircleElement)
