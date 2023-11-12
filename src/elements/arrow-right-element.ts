import { ICON_F_ARROW_RIGHT } from '@aracna/icons-feather/assets/arrow-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-right': IconFeatherArrowRightElement
  }
}

export class IconFeatherArrowRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_RIGHT
  }
}

defineCustomElement('icon-feather-arrow-right', IconFeatherArrowRightElement)
