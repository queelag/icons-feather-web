import { ICON_FEATHER_ARROW_UP_CIRCLE } from '@aracna/icons-feather/assets/arrow-up-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up-circle': IconFeatherElement
  }
}

export class IconFeatherArrowUpCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_UP_CIRCLE
  }
}

defineCustomElement('icon-feather-arrow-up-circle', IconFeatherArrowUpCircleElement)
