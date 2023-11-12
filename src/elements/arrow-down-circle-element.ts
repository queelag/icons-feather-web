import { ICON_F_ARROW_DOWN_CIRCLE } from '@aracna/icons-feather/assets/arrow-down-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-down-circle': IconFeatherArrowDownCircleElement
  }
}

export class IconFeatherArrowDownCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_DOWN_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-down-circle', IconFeatherArrowDownCircleElement)
