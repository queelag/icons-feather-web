import { ICON_FEATHER_ARROW_RIGHT_CIRCLE } from '@aracna/icons-feather/assets/arrow-right-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-right-circle': IconFeatherElement
  }
}

export class IconFeatherArrowRightCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_RIGHT_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-right-circle', IconFeatherArrowRightCircleElement)
