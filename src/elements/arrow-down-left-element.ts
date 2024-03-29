import { ICON_F_ARROW_DOWN_LEFT } from '@aracna/icons-feather/assets/arrow-down-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-down-left': IconFeatherArrowDownLeftElement
  }
}

export class IconFeatherArrowDownLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARROW_DOWN_LEFT
  }
}

defineCustomElement('icon-feather-arrow-down-left', IconFeatherArrowDownLeftElement)
