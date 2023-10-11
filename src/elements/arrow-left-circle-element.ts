import { ICON_FEATHER_ARROW_LEFT_CIRCLE } from '@aracna/icons-feather/assets/arrow-left-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-left-circle': IconFeatherElement
  }
}

export class IconFeatherArrowLeftCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_LEFT_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-left-circle', IconFeatherArrowLeftCircleElement)
