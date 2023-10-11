import { ICON_FEATHER_ARROW_DOWN_CIRCLE } from '@aracna/icons-feather/assets/arrow-down-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-down-circle': IconFeatherElement
  }
}

export class IconFeatherArrowDownCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_DOWN_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-down-circle', IconFeatherArrowDownCircleElement)
