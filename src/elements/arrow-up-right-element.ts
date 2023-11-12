import { ICON_F_ARROW_UP_RIGHT } from '@aracna/icons-feather/assets/arrow-up-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up-right': IconFeatherArrowUpRightElement
  }
}

export class IconFeatherArrowUpRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_UP_RIGHT
  }
}

defineCustomElement('icon-feather-arrow-up-right', IconFeatherArrowUpRightElement)
