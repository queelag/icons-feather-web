import { ICON_F_ARROW_RIGHT_CIRCLE } from '@aracna/icons-feather/assets/arrow-right-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-right-circle': IconFeatherArrowRightCircleElement
  }
}

export class IconFeatherArrowRightCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_RIGHT_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-right-circle', IconFeatherArrowRightCircleElement)
