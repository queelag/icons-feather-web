import { ICON_FEATHER_ARROW_DOWN_RIGHT } from '@aracna/icons-feather/assets/arrow-down-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-down-right': IconFeatherArrowDownRightElement
  }
}

export class IconFeatherArrowDownRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_DOWN_RIGHT
  }
}

defineCustomElement('icon-feather-arrow-down-right', IconFeatherArrowDownRightElement)
